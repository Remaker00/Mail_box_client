import React from 'react'
import { Link } from 'react-router-dom';
import classes from './Dropdown.module.css';

const DropDown = ({ isOpen, toggleDropdown }) => {

    const handlelogout=()=>{
        localStorage.removeItem('email');
        localStorage.removeItem('token');
        localStorage.removeItem('cartItems');
        localStorage.removeItem('cartItemCount');

        window.location.href="/";

    }


    return (
        <div>
            <div className={classes.dropdownContainer}>
                <div className={classes.menuButton} onClick={toggleDropdown}>
                    <div className={classes.menuIcon}></div>
                    <div className={classes.menuIcon}></div>
                    <div className={classes.menuIcon}></div>
                </div>
                {isOpen && (   
                    <ul className={classes.dropdownMenu}>
                        <li><Link to="/yourOrders" className={classes["link-reset"]}>Your Orders</Link></li>
                        <li><Link to="/contactus" className={classes["link-reset"]}>Contact Us</Link></li>
                        <li>Settings</li>
                        <li>Payments</li>
                        <li onClick={handlelogout}>Logout</li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default DropDown
