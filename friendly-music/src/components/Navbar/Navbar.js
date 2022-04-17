import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import Music from '../Music/Music';
import MyMusic from '../MyMusic/MyMusic';
import Users from '../Users/Users';
import Friends from '../Friends/Friends';

function Navbar({ user }) {

    return (
        <Router>
            <div className='navbar'>
                <nav>
                    <Link to="/"> Bläddra Musik </Link>
                    <Link to="/MyMusic"> Min Musik </Link>
                    <Link to="/Users"> Användare </Link>
                    <Link to="/Friends"> Vänner </Link>
                </nav>
            </div>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Music user = {user}/>} />
          <Route path="/MyMusic" caseSensitive={false} element={<MyMusic user = {user}/>} />
          <Route path="/Users" caseSensitive={false} element={<Users user = {user}/>} />
          <Route path="/Friends" caseSensitive={false} element={<Friends user = {user}/>} />
          {' '}
        </Routes>
      </Router>
    );
}

export default Navbar;