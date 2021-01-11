import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      {/* checkout left portion */}
      <div className="checkout_left">
        <img className="checkout_ad" src="./img/amazad.jpg" alt="" />

        {/* checkout items */}
        <div>
          <h2 className="checkout_title">Your Shopping Basket</h2>
        </div>
      </div>

      {/* checkout right portion */}
      <div className="checkout_right">
        <h2>subtotal will be here</h2>
      </div>
    </div>
  );
};

export default Checkout;
