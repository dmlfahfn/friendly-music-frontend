import React, {useEffect, useState} from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

import './scss/style.scss';

function App() {

  let userStat = JSON.parse(localStorage.getItem("loggedIn"))
  console.log("status",userStat);

  return (
    <div className="App">
      {userStat.userStatus ? (
        <div>
          <div className='header'>
            {/* <button onClick={logOut}>Logga ut</button>{' '} */}
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
            <Route path="/" caseSensitive={false} element={<Login />} />
          </Routes>
        </Router>
      </div>
    )}

  </div>
  );
}

export default App;
