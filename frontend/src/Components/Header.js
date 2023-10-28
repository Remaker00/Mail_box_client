import React, { useState } from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './Cart/HeaderCartButton';
import { Link } from 'react-router-dom';
import DropDown from './Store/DropDown';

const Header = ({ cartItemCount, onButtonClick }) => {

  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterdItems, setfilterdItems] = useState([]);

  const toggleDropdown = () => {

    setIsDropdownVisible((prev) => !prev);
  };

  const handlesearch = (e) => {
    setSearchQuery(e.target.value);

    setfilterdItems(filterdItems);
  }

  return (
    <div className={classes.container}>
      <div className={classes.backdrop} onClick={toggleDropdown} style={{ display: isDropdownVisible ? 'block' : 'none' }}></div>
      <div className={classes['cart-container']}>
        <DropDown isOpen={isDropdownVisible} toggleDropdown={toggleDropdown} />
      </div>
      <ul className={classes.left}>
        <li><Link to="/productform">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li>Categories</li>
      </ul>
      <div className={classes.center}>
        <h2>ZUWAVA</h2>
      </div>
      <div className={classes.right}>
        <label>Search</label><input type='text' placeholder='Search Here...' value={searchQuery} onChange={handlesearch} />
        <HeaderCartButton itemCount={cartItemCount} onButtonClick={onButtonClick} />
      </div>
      <div>
        {filterdItems.map((item) => (
          <div key={item.id}>{item.name}</div> 
        ))}
      </div>
    </div>
  )
}

export default Header
