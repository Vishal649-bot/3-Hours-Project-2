// CartDetailsModal.js
import React, { useContext } from 'react';
import "./CartDetail.css"
import {MyContext} from '../MyContext';
const CartDetailsModal = ({ onClose }) => {
  // Calculate total price
  const { cartItems } = useContext(MyContext);
  console.log(cartItems);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantityAvailable,
    0
  );

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Cart Details</h2>
        {cartItems.map((item, index) => (
          <div key={index}>
            <p>Medicine Name: {item.medicineName}</p>
            <p>Price: {item.price}</p>
            <p>Quantity Available: {item.quantityAvailable}</p>
            <hr />
          </div>
        ))}
        <p>Total Price: {totalPrice}</p>
      </div>
    </div>
  );
};

export default CartDetailsModal;
