// Form.js
import React, { useContext, useState } from 'react';
import {MyContext} from '../MyContext'; // Update the path as needed
import CartComponent from './CartComponent';
import CartDetailsModal from './CartDetailsModal';

const Form = () => {
  // Access the context for managing cart and product list
  const {
    cartItems,
    updateCartItems,
    productList,
    updateProductList,
  } = useContext(MyContext);

  // State to hold form data
  const [formData, setFormData] = useState({
    medicineName: '',
    description: '',
    price: '',
    quantityAvailable: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Update the product list with the new product
    updateProductList((prevList) => [...prevList, formData]);
    // Clear the form data
    setFormData({
      medicineName: '',
      description: '',
      price: '',
      quantityAvailable: '',
    });
  };

  // State to manage the visibility of the modal
  const [isModalVisible, setIsModalVisible] = useState(false);

  // Function to toggle modal visibility
  const toggleModal = () => {
    setIsModalVisible((prev) => !prev);
  };

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Check if quantity is greater than 0 before adding to the cart
    if (product.quantityAvailable > 0) {
      updateCartItems((prevItems) => [...prevItems, product]);
      // Decrease the quantity by 1
      updateProductList((prevList) =>
        prevList.map((item) =>
          item === product
            ? { ...item, quantityAvailable: item.quantityAvailable - 1 }
            : item
        )
      );
    }
  };

  return (
    <div>
      <form className="Container" onSubmit={handleSubmit}>
        <label>
          Medicine Name:
          <input
            type="text"
            name="medicineName"
            value={formData.medicineName}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Price:
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <label>
          Quantity Available:
          <input
            type="text"
            name="quantityAvailable"
            value={formData.quantityAvailable}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type="submit">Add Product</button>
        <CartComponent cartItemCount={cartItems.length} onClick={toggleModal} />
        <button onClick={toggleModal}>{cartItems.length}</button>

        {/* Display modal if visible */}
        {isModalVisible && (
          <CartDetailsModal cartItems={cartItems} onClose={toggleModal} />
        )}
      </form>

      {/* Display entered products */}
      <div>
        <h2>Product List:</h2>
        {productList.map((product, index) => (
          <div key={index}>
            <p>Medicine Name: {product.medicineName}</p>
            <p>Description: {product.description}</p>
            <p>Price: {product.price}</p>
            <p>Quantity Available: {product.quantityAvailable}</p>
            <button
              onClick={() => addToCart(product)}
              disabled={product.quantityAvailable === 0}
            >
              Add to Cart
            </button>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Form;
