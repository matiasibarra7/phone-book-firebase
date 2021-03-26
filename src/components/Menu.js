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
    <header>
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg d-flex justify-content-between">

              <ul className="navbar-nav px-2 mb-2 mb-lg-0">
              {props.currentUser? //Preguntó si recibió alguna respuestra sobre si hay usuario en linea
                <>
                  <li className="nav-item"><Link className="nav-link" to='/'><i className="fas fa-home"/> Home</Link></li>
                  {props.currentUser !== "noOne"?
                    <>
                      <li className="nav-item"><Link className="nav-link" to='/phone-book'><i className="fas fa-address-book"/> Phone-book</Link></li>
                      <li className="nav-item"><Link className="nav-link" to='/profile'><i className="far fa-user"/> Profile</Link></li>
                    </>
                    :
                    <>
                      <li className="nav-item"><Link className="nav-link" to='/login'><i className="fas fa-sign-in-alt"/> Login</Link></li>
                      <li className="nav-item"><Link className="nav-link" to='/register'><i className="fas fa-user-plus"/> Register</Link></li>
                    </>
                  }
                </>
              : <></>
              }
              </ul>


            {props.currentUser? //Pregunto si recibió alguna respuestra sobre si hay usuario en linea
              <>
              {props.currentUser !== "noOne"?
                <ul className="navbar-nav px-2 mb-2 mb-lg-0">
                  <li className="nav-item text-center"><Link className="nav-link" to='/profile'><span style={{color:"wheat"}}>{props.userData? props.userData.nick : ""}</span></Link></li>
                  <li className="nav-item d-flex justify-content-center"><button className="btn btn-danger"  onClick={logout}>Logout <i className="fas fa-sign-out-alt"/></button></li>
                </ul>
                : 
                <></>
              }
              </>
              : 
              <></>
            }
              

      </nav>
    </header>
  );
}

export default Menu;
