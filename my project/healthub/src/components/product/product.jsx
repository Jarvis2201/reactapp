import React from 'react';
import './product.css'
function Product({ imageSrc, title, description, price }) {
  return (
    <div className="product">
      <img src={imageSrc} alt={title} />
      <div className="product-info">
        <h1 className="product-title">{title}</h1>
        <p className="product-description">{description}</p>
        <p className="product-price">{price}</p>
        <a href="#" className="product-button">Add to Cart</a>
      </div>
    </div>
  );
}

function Products() {
  return (
    <div className="container">
      <div className="product-list">
        <Product
          imageSrc="pics/johnsonns.png"
          title="Johnsonns Lotion For Kids"
          description="Product details of Johnson's Baby-Soft Lotion (500ml)"
          price="Rs: 300/-"
        />
        <Product
          imageSrc="pics/Brufen.png"
          title="Brufen Tablets 400mg"
          description="Brufen (Ibuprofen) 400mg tablets, 25 tablets in one pack"
          price="Rs: 599/-"
        />
        <Product
          imageSrc="pics/Dettol.png"
          title="Dettol Liquid"
          description="Dettol Liquid 225ml one pack"
          price="Rs: 399/-"
        />
        <Product
          imageSrc="pics/Panadol.png"
          title="Panadol Tablets"
          description="Panadol Tablets 200mg one pack"
          price="Rs: 249/-"
        />
        <Product
          imageSrc="pics/Wintogeno.png"
          title="Wintogeno Cream"
          description="Wintogeno Cream for dry skin, 50ml"
          price="Rs: 199/-"
        />
        <Product
          imageSrc="pics/tums.png"
          title="Tums Antacid Tablets"
          description="Tums Antacid Tablets, 24 tablets in one pack"
          price="Rs: 129/-"
        />
      </div>
    </div>
  );
}

export default Products;