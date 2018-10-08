import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <nav>
    <Link to="/">home</Link>
    <Link to="/login">login</Link>
    <Link to="/signup">signup</Link>
    <Link to="/feature">feature</Link>
    <Link to="/signout">Sign Out</Link>
  </nav>
);

export default Header;