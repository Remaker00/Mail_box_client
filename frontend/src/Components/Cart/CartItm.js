import React from 'react';
import classes from './CartItems.module.css';
import axios from 'axios';

const CartItm = ({ cartItems, onIncreaseQuantity, onDecreaseQuantity, onRemoveItem }) => {

    const token = localStorage.getItem('token');

    const calculateTotal=()=>{

        const total =  cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
        return total.toFixed(2);
    }

    const handlePurchase = () => {
        axios.post('http://localhost:4000/api/addItem', cartItems, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then((response) => {
                alert("YaY!!! Order Placed");
                console.log('Cart items saved:', response.data);

                localStorage.removeItem('cartItems');
                localStorage.removeItem('cartItemCount');

                window.location.reload();
            })
            .catch((error) => {
                console.error('Error saving cart items:', error);
            });
    };


    return (
        <div className={classes['cart-container']}>
            <h2>Cart</h2>
            <table>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className={classes['cart-items']}>
                    {cartItems.map((item) => (
                        <tr key={item.id} className={classes['cart-item']}>
                            <td>
                                <div className={classes['item-details']}>
                                    <img
                                        src={item.imageSrc}
                                        alt={item.description}
                                        className={classes['item-image']}
                                    />
                                </div>
                            </td>
                            <td>
                                <span className={classes['item-price']}>{item.price}</span>
                            </td>
                            <td>
                                <div className={classes['quantity-control']}>
                                    <button onClick={() => onDecreaseQuantity(item.id)}>-</button>
                                    <span className={classes['item-quantity']}>{item.quantity}</span>
                                    <button onClick={() => onIncreaseQuantity(item.id)}>+</button>
                                </div>
                            </td>
                            <td>
                                <button onClick={() => onRemoveItem(item.id)}>Remove</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <strong>TOTAL: ${calculateTotal()}</strong>
            </div>
            <button className={classes["purchase-button"]} type="button" onClick={handlePurchase}>PURCHASE</button>
        </div>
    );
};

export default CartItm;
