import React, { useContext } from 'react';
import {MyContext} from '../MyContext'; // Update the path as needed

const CartComponent = () => {
  const { cartItems } = useContext(MyContext);

  return (
    <div>
      <p>Count: {cartItems.length}</p>
    </div>
  );
};

export default CartComponent;