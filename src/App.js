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

  useEffect(() => {
    auth.onAuthStateChanged( (user) => {
      if (user) {
        setCurrentUserId(user.uid)
      } else {
        setCurrentUserId(null)
      }
    });
  })


  return (
    <HashRouter basename='/'>

      <Menu currentUser={currentUserId} />


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/phone-book">
          <PhoneBook currentUser={currentUserId}/>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
