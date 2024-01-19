import React, { createContext, useState } from 'react';

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

  return (
    <MyContext.Provider
      value={{
        cartItems,
        updateCartItems,
        productList,
        updateProductList,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };