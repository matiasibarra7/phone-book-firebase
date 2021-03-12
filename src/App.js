import React, { useEffect, useState } from "react";
import {HashRouter, Switch, Route} from 'react-router-dom'
import PhoneBook from './components/PhoneBook'
import Home from './components/Home'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'


import { auth } from './firebaseConfig'



function App() {
  const [currentUserId, setCurrentUserId] = useState(null)
  const [message, setMessage] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged( (user) => {
      if (user) {
        setCurrentUserId(user.uid)
      } else {
        setCurrentUserId(null)
      }
    });
    
  })

  const showMessage = (msg) => {
    setMessage(msg)
  }

  return (
    <HashRouter basename='/'>

      <Menu currentUser={currentUserId} />

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
      </Switch>
    </HashRouter>
  );
}

export default App;
