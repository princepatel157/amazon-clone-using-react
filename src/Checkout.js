import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal.js";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      {/* checkout left portion */}
      <div className="checkout_left">
        <img className="checkout_ad" src="./img/amazad.jpg" alt="" />

        {/* checkout items */}
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>

          {/* checkout products */}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>

      {/* checkout right portion */}
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
