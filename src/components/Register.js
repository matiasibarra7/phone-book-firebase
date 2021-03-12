import React, {useState} from 'react';
import {auth} from '../firebaseConfig'
import {useHistory} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const history = useHistory()

  const registerUser = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        alert("se registró el usuario")
        setError(null)
        history.push('/')
      })
      .catch((e) => {
        setError(e.message)
      });
  }

  return (
    <>
      <form className="container-fluid border mt-5" style={{maxWidth:"360px"}} onSubmit={registerUser}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email</label>
          <input type="email" className="form-control" id="emailInput" placeholder="Type a email for username" 
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="passInput" className="form-label">Password</label>
          <input type="password" className="form-control" id="passInput" placeholder="Type a password" 
          onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <div className="mb-3">
          <input type="submit" className="btn btn-dark btn-block mt-4 w-100" value="Sign up"/>
        </div>
        {error?
          <div className="text-danger mb-2">{error}</div>
          : <></>
        }
      </form>
    </>
  );
}

export default Login;
