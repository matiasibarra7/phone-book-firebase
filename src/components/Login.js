import React, {useState} from 'react';
import {auth} from '../firebaseConfig'
import {useHistory, Link} from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const history = useHistory()

  const loginUser = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
      .then((res) => {
        setError(null)
        history.push('/')
      })
      .catch((e) => {
        setError(e.message)
      });
  }

  return (
    <>
      <h1 className="text-center mt-5">Login</h1>
      <form className="container-fluid border mt-5" style={{maxWidth:"360px"}} onSubmit={loginUser}>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">Email</label>
          <input type="text" className="form-control" id="emailInput" placeholder="fake-mail@123.com" 
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="passInput" className="form-label">Password</label>
          <input type="password" className="form-control" id="passInput" placeholder="Type your password" 
          onChange={(e) => setPassword(e.target.value)}  />
        </div>
        <div className="mb-3">
          <input type="submit" className="btn btn-dark btn-block mt-4 w-100" value="Log In"/>
        </div>
        {error?
          <div className="text-danger mb-2">{error}</div>
          : <></>
        }
        <div className="mb-2">Don't have an account? <Link to="/register">Sign up</Link> </div>
      </form>
    </>
  );
}

export default Login;
