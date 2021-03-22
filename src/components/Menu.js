import React from 'react';
import { Link, useHistory } from 'react-router-dom'
import { auth } from '../firebaseConfig'


function Menu(props) {

  const history = useHistory()

  const logout = () => {
    auth.signOut()
      .then(res => {
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
            {props.currentUser? //Preguntó si recibió alguna respuestra sobre si hay usuario en linea
              <>
                <li className="nav-item"><Link className="nav-link" to='/'>Home</Link></li>
                {props.currentUser !== "noOne"?
                  <>
                    <li className="nav-item"><Link className="nav-link" to='/phone-book'>Phone-book</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/profile'>Profile</Link></li>
                  </>
                  :
                  <>
                    <li className="nav-item"><Link className="nav-link" to='/register'>Register</Link></li>
                    <li className="nav-item"><Link className="nav-link" to='/login'>Login</Link></li>
                  </>
                }
              </>
             : <></>
            }
            </ul>


          <></>

          {props.currentUser? //Preguntó si recibió alguna respuestra sobre si hay usuario en linea
            <>
            {props.currentUser !== "noOne"?
              <>
                <span style={{color:"wheat"}} className="me-2">{props.userData? props.userData.nick : ""}</span>
                <button className="btn btn-danger" onClick={logout}>Logout</button>
              </>
              : 
              <></>
            }
            </>
            : 
            <></>
          }
            

      </div>
    </nav>
    </>
  );
}

export default Menu;
