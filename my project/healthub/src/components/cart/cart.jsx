import React, { useState } from 'react';
import './cart.css'; // Import your CSS file

function ProductList() {
  const [selectAllChecked, setSelectAllChecked] = useState(false);
  const [productCheckboxes, setProductCheckboxes] = useState([]);

  // Function to handle select all checkbox change event
  const handleSelectAllCheckbox = (event) => {
    const isChecked = event.target.checked;
    setSelectAllChecked(isChecked);
    setProductCheckboxes((prevCheckboxes) => prevCheckboxes.map((checkbox) => {
      checkbox.checked = isChecked;
      return checkbox;
    }));
  };

  return (
    <div className="product-list">
      <div className="select-all">
        <input
          type="checkbox"
          id="select-all-checkbox"
          className="product-checkbox"
          checked={selectAllChecked}
          onChange={handleSelectAllCheckbox}
        />
        <label htmlFor="select-all-checkbox">Select All</label>
      </div>

      <div className="product">
        <input
          type="checkbox"
          className="product-checkbox"
          ref={(checkbox) => setProductCheckboxes((prevCheckboxes) => [...prevCheckboxes, checkbox])}
        />
        <img src="pics/Johnsonns.png" alt="Product 1" />
        <div className="product-info">
          <h3 className="product-name">Johnsonns Lotion For Kids</h3>
          <p className="product-price">Rs:300/-</p>
          <p className="product-description">Product details of Johnson's Baby-Soft Lotion (500ml)</p>
          <i className="far fa-heart love-icon"></i>
        </div>
      </div>

      <div className="product">
        <input
          type="checkbox"
          className="product-checkbox"
          ref={(checkbox) => setProductCheckboxes((prevCheckboxes) => [...prevCheckboxes, checkbox])}
        />
        <img src="pics/Brufen.png" alt="Product 2" />
        <div className="product-info">
          <h3 className="product-name">Brufen Tablets</h3>
          <p className="product-price">Rs:599/-</p>
          <p className="product-description">Brufen (Ibuprofen) 400mg tablets, 25 tablets in one pack</p>
          <i className="far fa-heart love-icon"></i>
        </div>
      </div>

      <div className="product">
        <input
          type="checkbox"
          className="product-checkbox"
          ref={(checkbox) => setProductCheckboxes((prevCheckboxes) => [...prevCheckboxes, checkbox])}
        />
        <img src="pics/Dettol.png" alt="Product 3" />
        <div className="product-info">
          <h3 className="product-name">Dettol Liquid</h3>
          <p className="product-price">Rs:399/-</p>
          <p className="product-description">Dettol Liquid 225ml one pack</p>
          <i className="far fa-heart love-icon"></i>
        </div>
      </div>

      <div className="product">
        <input
          type="checkbox"
          className="product-checkbox"
          ref={(checkbox) => setProductCheckboxes((prevCheckboxes) => [...prevCheckboxes, checkbox])}
        />
        <img src="pics/Wintogeno.png" alt="Product 4" />
        <div className="product-info">
          <h3 className="product-name">Wintogeno</h3>
          <p className="product-price">Rs: 199/-</p>
          <p className="product-description">Wintogeno Cream for dry skin, 50ml</p>
          <i className="far fa-heart love-icon"></i>
        </div>
      </div>

      <div className="product">
        <input
          type="checkbox"
          className="product-checkbox"
          ref={(checkbox) => setProductCheckboxes((prevCheckboxes) => [...prevCheckboxes, checkbox])}
        />
        <img src="pics/tums.png" alt="Product 5" />
        <div className="product-info">
          <h3 className="product-name">Tums Tablets</h3>
          <p className="product-price">Rs:129/-</p>
          <p className="product-description">Tums Antacid Tablets, 24 tablets in one pack</p>
          <i className="far fa-heart love-icon"></i>
        </div>
      </div>

      <a href="#" className="checkout-btn">Checkout</a>
    </div>
  );
}

function Cart() {
  return (
    <div className="container">
      <h1>Product List</h1>
      <ProductList />
    </div>
  );
}

export default Cart;