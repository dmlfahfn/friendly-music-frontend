import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Music from '../Music/Music'

function Navbar({ user }) {
    return (
        <Router>
        <Routes>
          <Route path="/" caseSensitive={false} element={<Music />} />
          {/* <Route path="/" caseSensitive={false} element={<Home />} /> */}
          <Route path='*' component='' />{' '}
        </Routes>
      </Router>
    );
}

export default Navbar;