import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import App from './App';
import Login from './Login/login';
import SignUp from './SignUp/signUp';
import About from './About/about'
import reportWebVitals from './reportWebVitals';
import Trade from './Trades/Trade';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/App" element={<App />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/about" element={<About /> }></Route>
        <Route path="/Trade" element={<Trade />}></Route>
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
