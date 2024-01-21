// CartDetailsModal.js
import React, { useContext } from "react";
import "./CartDetail.css";
import { MyContext } from "../MyContext";

const CartDetailsModal = ({ onClose }) => {
    const { cartItems, updateCartItems, updateProductList, productList } =
        useContext(MyContext);

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (acc, obj) => acc + obj.quantity * obj.price,
        0
    );

    const addQuantity = (index, medicineName) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index] = {
            ...updatedCartItems[index],
            quantity: updatedCartItems[index].quantity + 1,
        };
        updateCartItems(updatedCartItems);
        updateProductList((prevList) => {
            return updateQuantityInProductList(prevList, medicineName, -1);
        });
    };

    const removeQuantity = (index, medicineName) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 0) {
            updatedCartItems[index] = {
                ...updatedCartItems[index],
                quantity: updatedCartItems[index].quantity - 1,
            };
            updateCartItems(updatedCartItems);
            updateProductList((prevList) => {
                return updateQuantityInProductList(prevList, medicineName, 1);
            });
        }
    };

    const updateQuantityInProductList = (prevList, medicineName, delta) => {
        const index = prevList.findIndex(
            (medicine) => medicine.medicineName === medicineName
        );

        if (index !== -1) {
            const updatedMedicines = [...prevList];
            updatedMedicines[index] = {
                ...updatedMedicines[index],
                quantityAvailable:
                    updatedMedicines[index].quantityAvailable + delta,
            };
            return updatedMedicines;
        }

        return prevList;
    };

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
                        <p>Quantity Available: {item.quantity}</p>
                        <p>Price: {item.price}</p>
                        <button
                            onClick={() =>
                                addQuantity(index, item.medicineName)
                            }
                        >
                            +
                        </button>
                        <button
                            onClick={() =>
                                removeQuantity(index, item.medicineName)
                            }
                        >
                            -
                        </button>
                        <hr />
                    </div>
                ))}
                <p>Total Price: {totalPrice}</p>
            </div>
        </div>
    );
};

export default React.memo(CartDetailsModal);
