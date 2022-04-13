import React, {useEffect, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

import './scss/style.scss';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  let userStat = JSON.parse(localStorage.getItem("loggedIn"))
  
  const logOut = (e) => {
    e.preventDefault()
    setIsSubmitted(false)
  }

  return (
    <div className="App">
      {isSubmitted ? (
        <div>
          <div className='header'>
            <button onClick={logOut}>Logga ut</button>{' '}
            <h1>
                Hello, <span>{userStat.username}</span>
            </h1>{' '}
          </div>
          <Navbar user={userStat.username} />
        </div>) : (
        <div className='app-router'>
        <h1>Friendly Music</h1>
        <Router>
          <Routes>
            <Route path="/" caseSensitive={false} element={<Login {...{ isSubmitted, setIsSubmitted }} />} />
          </Routes>
        </Router>
      </div>
    )}

  </div>
  );
}

export default App;
