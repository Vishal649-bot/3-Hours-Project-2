import React, { useContext, useState } from "react";
import { MyContext } from "../MyContext"; // Update the path as needed

const CartComponent = () => {
    // const [itemQuantity, setItemQuantity] = useState(0)
    const { cartItems } = useContext(MyContext);

    // const quantityToAdd = 1;

    // Update the quantity for each object in the array
    const totalQuantity = cartItems.reduce((acc, obj) => acc + obj.quantity, 0);
    return (
        <div>
            <p>Count: {totalQuantity}</p>
        </div>
    );
};

export default CartComponent;
