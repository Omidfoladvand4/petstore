import React from 'react'
import './Products.css'

const Products = ({ name, image, price, oldPrice, unit }) => {
  return (
    <div className="product">
      <img className="productImage" src={image} alt={name} />
      <div className="productDetails">
        <p className="productName">{name}</p>
        {oldPrice && <p className="oldPrice">{oldPrice} {unit}</p>}
        <p className="price">{price} {unit}</p>
        <button className="addToBasket">افزودن به سبد خرید</button>
      </div>
    </div>
  );
};

export default Products;
