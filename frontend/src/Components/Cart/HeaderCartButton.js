// HeaderCartButton.js
import React from 'react';
import CartIcon from '@mui/icons-material/ShoppingCart';
import classes from './HeaderCart.module.css';

const HeaderCartButton = (props) => {

    const handleCartButtonClick = () => {
        props.onButtonClick();
    };

    return (
        <div className={classes.button} onClick={handleCartButtonClick}> {/* Make the div clickable */}
            <span className={classes.icon}>
                <span className={classes.badge}>{props.itemCount}</span>
                <CartIcon />
            </span>
        </div>
    );
};

export default HeaderCartButton;
