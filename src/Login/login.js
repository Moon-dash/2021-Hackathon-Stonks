import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";
import App from '../App';
import axios from 'axios';
import './login.css';

const URL = 'http://localhost:5000';

export default function Login() {

  let usrName = React.createRef();
  let pass = React.createRef();

  let navigate = useNavigate();
  const [errMsg, setErrMsg] = useState('');

  const SubmitForm = (e) => {
    e.preventDefault();
    const data = {
      username: usrName.value,
      password: pass.value
    }

    axios.post(URL + '/authenticate-user', data)
      .then((response) => {
        if (response.data.errMsg) {
          setErrMsg(response.data.errMsg);
        } else {
          console.log('redirecting...');
          setErrMsg('');
          navigate('/App');
        }
      })
      .catch((err) => { throw err })
  }

  return (
    <div className="login">
      <div className="login-body">
        <h1 style={{paddingBottom:"20px"}}> Login </h1>
        <form action="auth" onSubmit={SubmitForm}>
            <input type="text" name="username" ref={usr => (usrName = usr)} placeholder="Username" required/> <br/>
            <input type="password" name="password" ref={passwrd => (pass = passwrd)} placeholder="Password" required/> <br/>
            <div className='buttons'>
            {/* <button className="submitbtn"><Link to="/App" className="submitbtn">Home</Link></button> */}
            <button type="submit" className='submitbtn'>Submit</button>
            </div>
          </form>
          <br/>
          <div>
          Don't have an account?
              <button className="submitbtn"><Link className='submitbtn' to="/signUp">Sign Up</Link></button>
        </div>
        { errMsg ? <h4>{errMsg}</h4> : undefined }
      </div>
    </div>
  );
}
