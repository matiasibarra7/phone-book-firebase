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

  const showMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <HashRouter basename='/'>

      <Menu currentUser={currentUserId} userData={currentUserData}/>

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
          <PhoneBook currentUser={currentUserId}/>
        </Route>
        <Route path="/profile">
          <Profile currentUser={currentUserId} setCurrentUserData={setCurrentUserData} currentUserData={currentUserData}/>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
