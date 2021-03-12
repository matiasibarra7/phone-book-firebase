import React, { useState, useEffect } from "react";
import { db } from '../firebaseConfig'


function PhoneBook() {
  const [nameInput, setNameInput] = useState("")
  const [phoneInput, setPhoneInput] = useState('')
  const [contacts, setContacts] = useState([])
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [IdToUpdate, setIdToUpdate] = useState(null)

  const [loadingAdd, setLoadingAdd] = useState(false)
  const [loadingPeople, setLoadingPeople] = useState(false)
  
  useEffect( ()=> {
    getUsers()
  }, [])

  const deletePerson = async(id) => {
    try {
      await db.collection('phoneBook').doc(id).delete();
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
      setIdToUpdate(id)
    }
    catch (e) {
      console.log(e)
    }
  }

  const updatePerson = async(e) => {
    e.preventDefault()
    setLoadingAdd(true)
    const updatePerson = {
      name: nameInput,
      phone: phoneInput
    };
    try {
      await db.collection('phoneBook').doc(IdToUpdate).set(updatePerson)
      setIdToUpdate(null)
      setPhoneInput('')
      setNameInput('')
      getUsers()
      setLoadingAdd(false)
    }
    catch (e) {
      console.log(e);
    }
  }

  const getUsers = async() => {
    setLoadingPeople(true)
    try {
      const { docs } = await db.collection('phoneBook').get();
      const dataUsers = docs.map(el => { return {id: el.id, ...el.data()}})
      setContacts(dataUsers)
      setLoadingPeople(false)
    }
    catch (e) {
      console.log(e);
    }

  }

  const newUser = async(e) => {
    e.preventDefault();
    
    if (!nameInput.trim()) {
      setError("Name can't be blanck")
    } else if (!phoneInput) {
      setError("Phone can't be blanck")
    } else {
      setError(null)
      setLoadingAdd(true)


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
        setLoadingAdd(false)

        setTimeout(() => {
          setSuccess(false)
        }, 3000)
      }
      catch(e) {
        console.log(e);
      }

    }



  }


  return (
    <div className="container mt-5">
            <div className="row">
              <div className="col">
                <h2>New contact</h2>
                <form className="form-group" onSubmit={IdToUpdate? updatePerson : newUser}>
                  <input type="text" value={nameInput} onChange={(e) => setNameInput(e.target.value)} className="form-control" placeholder="Type a name"/>
                  <input type="number" value={phoneInput} onChange={(e) => setPhoneInput(e.target.value)} className="form-control" placeholder="Type a number phone"/>
                  <div className="d-grid gap-2">

                    {IdToUpdate?
                      <>
                        {loadingAdd?
                            <div className="btn btn-dark btn-block mt-3">
                              <div className="spinner-border text-light" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </div>
                            </div>
                          :
                            <input type="submit" value="Update contact" className="btn btn-primary btn-block mt-3"/>
                          }
                      </>
                      :
                      <>
                        {loadingAdd?
                          <div className="btn btn-dark btn-block mt-3">
                            <div className="spinner-border text-light" role="status">
                              <span className="visually-hidden">Loading...</span>
                            </div>
                          </div>
                        :
                          <input type="submit" value="Add contact" className="btn btn-dark btn-block mt-3"/>
                        }
                        
                      </>
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
                <h2>Contact list</h2>
                <ul className="list-group">
                  {
                    loadingPeople?
                      <li className="list-group-item text-center">
                        <div className="spinner-border text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>                        
                      </li>
                      :
                      <>
                        { contacts.length?
                            contacts.map((el,i) => {
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
                      </>
                  }
                </ul>
              </div>
            </div>
          </div>
  )
}

export default PhoneBook