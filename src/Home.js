import React from "react";
import "./Home.css";
import Product from "./Product.js";

const Home = () => {
  return (
    <>
      <div className="home">
        <img s className="home_img" src="amazonbanner.jpg" alt="" />

        {/* product component */}
        <div className="home_row">
          <Product
            id="123"
            price={442.2}
            title="Norse Mythology: Neil Gaimen"
            rating={4.7}
            image="norse.jpg"
          />
          <Product
            id="123"
            title="Norse Mythology: Neil Gaimen"
            price={442.2}
            rating={4.7}
            image="norse.jpg"
          />
        </div>
        <div className="home_row">
          <Product
            id="123"
            title="Norse Mythology: Neil Gaimen"
            price={442.2}
            rating={4.7}
            image="norse.jpg"
          />
          <Product
            id="123"
            title="Norse Mythology: Neil Gaimen"
            price={442.2}
            rating={4.7}
            image="norse.jpg"
          />
          <Product
            id="123"
            title="Norse Mythology: Neil Gaimen"
            price={442.2}
            rating={4.7}
            image="norse.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
