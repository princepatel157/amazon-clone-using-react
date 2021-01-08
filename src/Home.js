import React from "react";
import "./Home.css";
import Product from "./Product.js";
import { Items_row1, Items_row2 } from "./Items.js";

const Home = () => {
  return (
    <>
      <div className="home">
        <img s className="home_img" src="./img/amazonbanner.jpg" alt="" />

        {/* product component */}
        {/* first row */}
        <div className="home_row">
          {Items_row1.map((val) => {
            console.log("fat arrow used");
            return (
              <Product
                title={val.title}
                price={val.price}
                rating={val.rating}
                image={val.image}
              />
            );
          })}
        </div>

        {/* second row */}
        <div className="home_row">
          {Items_row2.map((val) => {
            console.log("fat arrow used");
            return (
              <Product
                title={val.title}
                price={val.price}
                rating={val.rating}
                image={val.image}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
