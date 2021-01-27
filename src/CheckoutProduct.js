import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct(props) {
  const [{ basket }, dispatch] = useStateValue();

  // remove item from basket
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: props.id,
    });
  };

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
        <button onClick={removeFromBasket} className="checkoutProduct_button">
          Remove from Busket
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
