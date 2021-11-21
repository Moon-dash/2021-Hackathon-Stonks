import React, { Component } from 'react';
import axios from 'axios';
import './signUp.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

const URL = 'http://localhost:5000';

class SignUp extends Component
{
  constructor() {
    super();
    this.usrName = React.createRef();
    this.pass = React.createRef();
    this.state = { user: '' };
    this.onSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e)
  {
    e.preventDefault();

    let data = {
      username: this.usrName.value,
      password: this.pass.value
    }

    axios.post(URL + '/add-user', data);
  }

  render() {
    return (
      <div className="login">
        <div className="form">
          <h1 style={{paddingBottom:"20px"}}> Sign Up </h1>
          <form onSubmit={this.onSubmit}>
            <input id="usr" type="text" ref={usr => (this.usrName = usr)} placeholder="Username" required/><br/>
            <input type="text" ref={pass => (this.pass = pass)} placeholder="Password" required/>
          <div className="submit">
            <input type="submit" className="submit-button"/>
          </div>
          </form>
          <br/>
          <div>
              Already have an account?
              <button className="submitbtn"><Link className='submitbtn' to="/">Login</Link></button>
        </div>
        </div>
      </div>
    );
  }
}


export default SignUp;
