import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

import Music from '../Music/Music';
import MyMusic from '../MyMusic/MyMusic';
import Users from '../Users/Users';
import Friends from '../Friends/Friends';
import FriendsMusic from '../FriendsMusic/FriendsMusic';

function Navbar({ user }) {

    return (
        <Router>
            <div className='navbar'>
                <nav>
                    <Link to="/"> Mina Musik </Link>
                    <Link to="/Music"> Bläddra Musik </Link>
                    <Link to="/Users"> Användare </Link>
                    <Link to="/Friends"> Vänner </Link>
                    {/* <Link to="/FriendsMusic"> Vänners Favoriter </Link> */}
                </nav>
            </div>
        <Routes>
          <Route path="/" caseSensitive={false} element={<MyMusic user = {user}/>} />
          <Route path="/Music" caseSensitive={false} element={<Music user = {user}/>} />
          <Route path="/Users" caseSensitive={false} element={<Users user = {user}/>} />
          <Route path="/Friends" caseSensitive={false} element={<Friends user = {user}/>} />
          {/* <Route path="/FriendsMusic" caseSensitive={false} element={<FriendsMusic user = {user}/>} /> */}
          {' '}
        </Routes>
      </Router>
    );
}

export default Navbar;