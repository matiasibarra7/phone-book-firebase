import React from "react";
import {HashRouter, Switch, Route} from 'react-router-dom'
import PhoneBook from './components/PhoneBook'
import Home from './components/Home'
import Menu from './components/Menu'
import Login from './components/Login'
import Register from './components/Register'


function App() {

  


  return (
    <HashRouter basename='/'>

      <Menu />


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
          <PhoneBook />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
