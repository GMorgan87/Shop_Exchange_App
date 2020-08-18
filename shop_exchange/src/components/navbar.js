import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
  <div className='nav-bar'>
  <ul>
    <li>
      <Link to="/">HOME</Link>
    </li>
    <li>
      <Link to="/admin">ADMIN</Link>
    </li>
  </ul>
  </div>
);

export default NavBar;
