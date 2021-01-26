import React from "react";
import "./CheckoutProduct.css";

function CheckoutProduct(props) {
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={props.image} />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{props.title}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{props.price}</strong>
        </p>
        <div className="checkoutProduct_rating">{props.rating}</div>
        <button className="checkoutProduct_button">Remove from Busket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
