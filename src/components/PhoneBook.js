import React, { useState, useEffect } from "react";
import { db } from '../firebaseConfig'


function PhoneBook(props) {
  const [nameInput, setNameInput] = useState('')
  const [phoneInput, setPhoneInput] = useState('')
  const [contacts, setContacts] = useState([])
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [IdToUpdate, setIdToUpdate] = useState(null)

  const [loadingAdd, setLoadingAdd] = useState(false)
  const [loadingPeople, setLoadingPeople] = useState(false)
  
  useEffect( ()=> {
    const getContacts = async() => {
      setLoadingPeople(true)
      try {
        /* console.log("currentUser ", props.currentUser) */
        
        if (props.currentUser) {
          const { docs } = await db.collection(`phoneBook-${props.currentUser}`).get();
          const dataUsers = docs.map(el => { return {id: el.id, ...el.data()}})
          setContacts(dataUsers)
          setLoadingPeople(false)
        }
      }
      catch (e) {
        console.log(e);
      }
    }
    getContacts()

  }, [props.currentUser])

  const getContacts = async() => {
    setLoadingPeople(true)
    try {
      /* console.log("currentUser ", props.currentUser) */

      if (props.currentUser) {
        const { docs } = await db.collection(`phoneBook-${props.currentUser}`).get();
        const dataUsers = docs.map(el => { return {id: el.id, ...el.data()}})
        setContacts(dataUsers)
        setLoadingPeople(false)
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  const newContact = async(e) => {
    e.preventDefault();
    
    if (!nameInput.trim()) {
      setError("Name can't be blanck")
    } else if (!phoneInput) {
      setError("Phone can't be blanck")
    } else {
      setError(null)
      setLoadingAdd(true)


      const newObjectContact = {
        name: nameInput,
        phone: phoneInput
      };
      try {
        await db.collection(`phoneBook-${props.currentUser}`).add(newObjectContact);
        setNameInput('')
        setPhoneInput('')
        setSuccess(true)
        getContacts()
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

  

  const editContact = async(id) => {
    try {
      const person = await db.collection(`phoneBook-${props.currentUser}`).doc(id).get()
      const {name, phone} = person.data()
      setPhoneInput(phone)
      setNameInput(name)
      setIdToUpdate(id)
    }
    catch (e) {
      console.log(e)
    }
  }

  const updateContact = async(e) => {
    e.preventDefault()
    setLoadingAdd(true)
    const updatedContact = {
      name: nameInput,
      phone: phoneInput
    };
    try {
      await db.collection(`phoneBook-${props.currentUser}`).doc(IdToUpdate).set(updatedContact)
      setIdToUpdate(null)
      setPhoneInput('')
      setNameInput('')
      getContacts()
      setLoadingAdd(false)
    }
    catch (e) {
      console.log(e);
    }
  }

  const deleteContact = async(id) => {
    try {
      await db.collection(`phoneBook-${props.currentUser}`).doc(id).delete();
      getContacts()
    }
    catch (e) {
      console.log(e);
    }
  }


  return (
    <div className="container mt-5">
            <div className="row">
              <div className="col">
                <h2>New contact</h2>
                <form className="form-group" onSubmit={IdToUpdate? updateContact : newContact}>
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
                                      <button className="btn btn-secondary" onClick={() => editContact(el.id)}>Update</button>
                                      <button className="btn btn-danger" onClick={() => deleteContact(el.id)}>Delete</button>
                                    </div>
                                  </div>
                                </li>)
                            })
                          : 
                            <>
                              <div>It seems that there are no people here...</div>
                              <div>Try adding a new contact!</div>
                            </>
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