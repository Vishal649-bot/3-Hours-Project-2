import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [productList, setProductList] = useState([]);

    const updateCartItems = (newItems) => {
        setCartItems(newItems);
    };

    const updateProductList = (newList) => {
        setProductList(newList);
    };

    // React.useEffect(() => {

    const addQuentity = (index) => {
        // let update = cartItems;

        const increaseQuantity = cartItems;
        increaseQuantity[index].quantity = increaseQuantity[index].quantity + 1;
        updateCartItems((prevItems) => [...increaseQuantity]);
        // setCartItems((child) => {
        //     update[index].quantity = update[index].quantity + 1;

        //     return update;
        // });
    };
    // }, [addQuentity])

    // const removeQuentity = () => {};

    return (
        <MyContext.Provider
            value={{
                cartItems,
                updateCartItems,
                addQuentity,
                productList,
                updateProductList,
            }}
        >
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };
