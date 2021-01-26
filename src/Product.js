import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product(props) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: props.id,
        price: props.price,
        title: props.title,
        image: props.image,
        rating: props.rating,
      },
    });
  };
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
        <button onClick={addToBasket}>Add to basket</button>
      </div>
    </>
  );
}

export default Product;
