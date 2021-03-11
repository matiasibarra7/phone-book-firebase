import React, {useEffect, useState} from 'react';
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebaseConfig'


function Menu() {
  const [user, setUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged( (user) => {
      if (user) {
        setUser(user.email)
        console.log(user)
      }
    })
  }, [])

  const logout = () => {
    auth.signOut()
      .then(res => {
        console.log("te deslogueaste")
        setUser(null)
        history.push('/')
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (
    <>
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
          {user?
            <>
              <li className="nav-item"><Link className="nav-link" to='/phone-book'>Phone-book</Link></li>
            </>
            :
            <>
              <li className="nav-item"><Link className="nav-link" to='/register'>Register</Link></li>
              <li className="nav-item"><Link className="nav-link" to='/login'>Login</Link></li>
            </>
          }
        </ul>
        {user?
          <button className="btn btn-danger" onClick={logout}>Logout</button>
          : <></>
        }
      </div>
    </nav>
    </>
  );
}

export default Menu;
