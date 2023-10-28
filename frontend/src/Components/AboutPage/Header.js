import React from 'react';
import classes from '../Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <div className={classes.container}>
        <ul className={classes.left}>
            <li><Link to="/productform">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>Categories</li>
        </ul>
    </div>
  )
}

export default Header
