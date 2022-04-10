import React, { useState } from 'react';
import { NavLink, Link, BrowserRouter } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar';

import './scss/style.scss';

function App() {

  const [user, setUser] = useState();
  let userStat = JSON.parse(localStorage.getItem("loggedIn"))

  setUser(userStat);

  return (
    <div className="App">
      {!user.userStatus ? (
        <div>
          <div className='header'>
            {/* <button onClick={logOut}>Logga ut</button>{' '} */}
            <p>
                Hello, <span>{user.username}</span>
            </p>{' '}
        </div>
        <Navbar user={user.username} />
      </div>) : (
        <div className='app-router'>
        <h1>Friendly Music</h1>
        <BrowserRouter>
        <Router>
          <Routes>
            <Route path="/" caseSensitive={false} element={<Login />} />
          </Routes>
        </Router>
        </BrowserRouter>
      </div>
  )}

    </div>
  );
}

export default App;
