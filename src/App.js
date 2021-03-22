import React, { useEffect, useState } from "react";
import {HashRouter, Switch, Route} from 'react-router-dom'
import PhoneBook from './components/PhoneBook'
import Home from './components/Home'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'


import { auth, db } from './firebaseConfig'



function App() {
  const [currentUserId, setCurrentUserId] = useState(null)
  const [currentUserData, setCurrentUserData] = useState(null)

  const [message, setMessage] = useState(null)

  useEffect(() => {


    const getDataProfile = async(id) => {
      try {
        const dataUser = await db.collection(`Users-Data`).doc(id).get()
        setCurrentUserData({...dataUser.data(), id: id})
        /* console.log({...dataUser.data(), id: id}); */
      }
      catch (e) {
        console.log(e);
      }

    }



    auth.onAuthStateChanged( (user) => {
      if (user) {
        setCurrentUserId(user.uid)
        getDataProfile(user.uid)
      } else {
        setCurrentUserId('noOne')
        setCurrentUserData(null)
      }
    });
    
  }, [])


  const denyFeature = (e) => {
    e.preventDefault()
    showMessage("deny")
  }

  const showMessage = (msg) => {
    if (msg === "deny") {
      setMessage("This operation is reserved for register users only. If you wanna try it, please, register with a email (Not necessary a real one) and try again")
      setTimeout(()=>{
        setMessage(null)
      }, 10000)
    } else {
      setMessage(msg)
      setTimeout(()=>{
        setMessage(null)
      }, 4000)
    }
  }

  return (
    <HashRouter basename='/'>

      <Menu currentUser={currentUserId} userData={currentUserData}/>

      {message?
        <div className="alert alert-success" role="alert">
          {message}
        </div>
        :  <></>
      }

      <Switch>
        <Route exact path="/">
          <Home msg = {message} showMessage = {showMessage}  />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register showMessage = {showMessage} />
        </Route>
        <Route path="/phone-book">
          <PhoneBook currentUser={currentUserId} denyFeature={denyFeature}/>
        </Route>
        <Route path="/profile">
          <Profile currentUserId={currentUserId} setCurrentUserData={setCurrentUserData} currentUserData={currentUserData} denyFeature={denyFeature}/>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
