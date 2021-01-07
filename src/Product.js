import React from "react";
import "./Product.css";

function Product(props) {
  return (
    <>
      <div className="product">
        <div className="product_info">
          <p>{props.title}</p>
          <p className="product_price">
            <small>Rs </small>
            <strong>{props.price}</strong>
          </p>
          <p className="product_rating">{props.rating}</p>
        </div>
        <img src={props.image} alt="" />
        <button>Add to basket</button>
      </div>
    </>
  );
}

export default Product;
