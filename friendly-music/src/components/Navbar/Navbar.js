import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import Music from '../Music/Music';
import MyMusic from '../MyMusic/MyMusic';
import Users from '../Users/Users';

function Navbar({ user }) {

    return (
        <Router>
            <div className='navbar'>
                <nav>
                    <Link to="/"> Bläddra Musik </Link>
                    <Link to="/MyMusic"> Min Musik </Link>
                    <Link to="/Users"> Användare </Link>
                </nav>
            </div>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Music user = {user}/>} />
          <Route path="/MyMusic" caseSensitive={false} element={<MyMusic user = {user}/>} />
          <Route path="/Users" caseSensitive={false} element={<Users user = {user}/>} />
          {' '}
        </Routes>
      </Router>
    );
}

export default Navbar;