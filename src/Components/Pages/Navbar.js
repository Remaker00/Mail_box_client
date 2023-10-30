import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Navbar.css'

const Navbar = () => {

  const handlelogout=()=>{
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    window.location.href="/";
  }

  return (
    <nav>
      <ul>
        <li>
          <Link to="/mail-inbox">Inbox</Link>
        </li>
        <li>
          <Link to="/mail-box-client">Compose</Link>
        </li>
        <li>
          <button onClick={handlelogout}>Log Out</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
