import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <>
      <nav className="header">
        {/* logo*/}
        <Link to="/">
          <img className="header_logo" src="./img/amaz.png" alt="no img" />
        </Link>

        {/* search bar */}
        <div className="header_search">
          <input type="text" className="header_searchbar" />
          <SearchIcon className="header_searchicon" />
        </div>

        {/* navlinks */}
        <div className="header_nav">
          <Link to="/" className="header_links">
            <div className="header_option">
              <span className="header_option_l1">hello</span>
              <span className="header_option_l2">Sign In</span>
            </div>
          </Link>
          <Link to="/orders" className="header_links">
            <div className="header_option">
              <span className="header_option_l1">Returns</span>
              <span className="header_option_l2"> & Orders</span>
            </div>
          </Link>
          <Link to="/" className="header_links">
            <div className="header_option">
              <span className="header_option_l1">Your</span>
              <span className="header_option_l2">Prime</span>
            </div>
          </Link>
          <Link to="/checkout" className="header_links">
            <div className="header_basket">
              <ShoppingBasketIcon />
              <span className="header_option_l2 basket_count">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
