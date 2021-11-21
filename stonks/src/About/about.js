import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import App from '../App';
import './about.css'

function About(){
    return(
       <div className = "help">
          <div className = "home-Button">
            <Link id="Home-Link" to="/App">Home</Link>
          </div>
          <div className="about-body">
            <h1>&emsp;About</h1>
            <p>&emsp; &emsp;For Hack Western 8, we decided to create a cryptocurrency marketplace website. Using the CoinkGecko API,
               <br></br>&emsp; &emsp;our website retrieves and displays data on over 150 cryptocurrencies. We also added a simulated marketplace, 
               <br></br>&emsp; &emsp;where you can create an account and purchase cryptocurrencies.
            </p>
            <div className = "image">
              <img src={"https://pbs.twimg.com/profile_images/1280883056979726339/9YesHxc2_400x400.jpg"} className="img" />
            </div>
          </div>
       </div> 
    );
}

export default About;