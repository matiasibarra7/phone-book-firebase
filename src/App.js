import React, { useState, useEffect } from "react";
import { db } from './firebaseConfig'


function App() {
  const [nameInput, setNameInput] = useState("")
  const [phoneInput, setPhoneInput] = useState('')
  const [userList, setUserList] = useState([])
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [IdToUpdate, setIdToUpdate] = useState(null)
  

  useEffect( ()=> {
    getUsers()
  }, [])

  const deletePerson = async(id) => {
    try {
      await db.collection('phoneBook').doc(id).delete();
      console.log("eliminado");
      getUsers()
    }
    catch (e) {
      console.log(e);
    }
  }

  const editPerson = async(id) => {
    try {
      const person = await db.collection('phoneBook').doc(id).get()
      const {name, phone} = person.data()
      setPhoneInput(phone)
      setNameInput(name)
      console.log(name, phone);
      setIdToUpdate(id)
    }
    catch (e) {
      console.log(e)
    }
  }

  const updatePerson = async(e) => {
    e.preventDefault()
    const updatePerson = {
      name: nameInput,
      phone: phoneInput
    };
    try {
      await db.collection('phoneBook').doc(IdToUpdate).set(updatePerson)
      console.log("Se actualizó!");
      setIdToUpdate(null)
      setPhoneInput('')
      setNameInput('')
      getUsers()
    }
    catch (e) {
      console.log(e);
    }
  }

  const getUsers = async() => {
    const { docs } = await db.collection('phoneBook').get();
    const dataUsers = docs.map(el => { return {id: el.id, ...el.data()}})
    setUserList(dataUsers)
  }

  const newUser = async(e) => {
    e.preventDefault();
    
    if (!nameInput.trim()) {
      setError("Name can't be blanck")
    } else if (!phoneInput) {
      setError("Phone can't be blanck")
    } else {
      setError(null)

      const newPerson = {
        name: nameInput,
        phone: phoneInput
      };
      try {
        await db.collection('phoneBook').add(newPerson);
        setNameInput('')
        setPhoneInput('')
        setSuccess(true)
        getUsers()
        setTimeout(() => {
          setSuccess(false)
        }, 2000)
      }
      catch(e) {
        console.log(e);
      }

    }



  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>New User</h2>
          <form className="form-group" onSubmit={IdToUpdate? updatePerson : newUser}>
            <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} className="form-control" placeholder="Type a name"/>
            <input type="number" value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} className="form-control" placeholder="Type a number phone"/>
            <div className="d-grid gap-2">

              {IdToUpdate?
                <input type="submit" value="Update user" className="btn btn-primary btn-block mt-3"/>
                :
                <input type="submit" value="Add user" className="btn btn-dark btn-block mt-3"/>
              }

            </div>
          </form>
          {error? 
            <div className="text-danger mt-2">{error}</div>
            : <></>
          }
          {success?
            <div className="text-success mt-2">Person correctly added!</div>
            : <></>
          }
        </div>
        <div className="col">
          <h2>Users List</h2>
          <ul className="list-group">
            {userList.length?
              userList.map((el,i) => {
                return (
                <li className="list-group-item" key={el.id + i}>
                  <div className="row"> 
                    <div className="col">{el.name}</div>
                    <div className="col">{el.phone}</div>
                    <div className="col btn-group float-end">
                      <button className="btn btn-secondary" onClick={() => editPerson(el.id)}>Update</button>
                      <button className="btn btn-danger" onClick={() => deletePerson(el.id)}>Delete</button>
                    </div>
                  </div>
                </li>)
              })
              : <div>There aren't people here...</div>
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
