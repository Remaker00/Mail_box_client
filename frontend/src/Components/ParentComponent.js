import React, { useState, useEffect } from 'react';
import Header from './Header';
import Items from './FrontItems/Items';
import CarouselEffect from './CarouselEffect/CarouselEffect';
import CartItm from './Cart/CartItm';
import './BackDrop.css'; // Import the CSS for the backdrop

const ParentComponent = () => {
    const [cartItemCount, setCartItemCount] = useState(() => {
        const storedCartItemCount = parseInt(localStorage.getItem('cartItemCount')) || 0;
        return storedCartItemCount;
    });
    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        return storedCartItems;
    });
    const [isCartVisible, setIsCartVisible] = useState(false);


    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        localStorage.setItem('cartItemCount', cartItemCount.toString());
    }, [cartItems, cartItemCount]);

    const addToCartHandler = (item) => {
        // Check if the item is already in the cart
        const existingItemIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

        if (existingItemIndex !== -1) {
            // If the item exists in the cart, increase its quantity by 1
            const updatedCartItems = cartItems.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    return { ...cartItem, quantity: cartItem.quantity + 1 };
                } else {
                    return cartItem;
                }
            });

            setCartItems(updatedCartItems);
        } else {
            // If the item is not in the cart, add it with a quantity of 1
            const newItem = { ...item, quantity: 1 };
            setCartItems((prevItems) => [...prevItems, newItem]);
        }

        setCartItemCount((prevCount) => prevCount + 1);
    };

    const handleCartButtonClick = () => {
        setIsCartVisible((prevValue) => !prevValue); // Toggle cart visibility
    };

    const onRemoveItem = (id) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== id);
        const updatedCartItemCount = updatedCartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );

        setCartItems(updatedCartItems);
        setCartItemCount(updatedCartItemCount);

        // Update the local storage for cartItemCount and cartItems
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        localStorage.setItem('cartItemCount', updatedCartItemCount.toString());
    };

    const handledecrease = (id) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );

        const updatedCartItemCount = updatedCartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );

        setCartItems(updatedCartItems);
        setCartItemCount(updatedCartItemCount);
    };

    const handleincrease = (id) => {
        const updatedCartItems = cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );

        const updatedCartItemCount = updatedCartItems.reduce(
            (total, item) => total + item.quantity,
            0
        );

        setCartItems(updatedCartItems);
        setCartItemCount(updatedCartItemCount);
    };

    return (
        <div>
            <Header cartItemCount={cartItemCount} onButtonClick={handleCartButtonClick} />
            <CarouselEffect />
            <Items onAddToCart={addToCartHandler} />
            {isCartVisible && (
                <div className="cart-container">
                    <CartItm
                        cartItems={cartItems}
                        onCartClose={handleCartButtonClick}
                        onDecreaseQuantity={handledecrease}
                        onIncreaseQuantity={handleincrease}
                        onRemoveItem={onRemoveItem}
                    />
                </div>
            )}
            {isCartVisible && <div className="backdrop" onClick={handleCartButtonClick}></div>}
        </div>
    );
};

export default ParentComponent;
