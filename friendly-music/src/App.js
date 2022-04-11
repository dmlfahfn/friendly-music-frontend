import React, { useState } from 'react';
import { NavLink, Link, BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

import './scss/style.scss';

function App() {

  let userStat = JSON.parse(localStorage.getItem("loggedIn"))

  return (
    <div className="App">
      {!userStat.userStatus ? (
        <div>
          <div className='header'>
            {/* <button onClick={logOut}>Logga ut</button>{' '} */}
            <p>
                Hello, <span>{userStat.username}</span>
            </p>{' '}
          </div>
          <Navbar user={userStat.username} />
        </div>) : (
        <div className='app-router'>
        <h1>Friendly Music</h1>
        <Router>
          <Routes>
            <Route path="/" caseSensitive={false} element={<Login />} />
          </Routes>
        </Router>
      </div>
    )}

  </div>
  );
}

export default App;
