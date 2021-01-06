import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

function Header() {
  return (
    <>
      <nav className="header">
        {/* images*/}
        <Link to="/">
          <img className="header_logo" src="amaz.png" alt="no img" />
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
              <span className="header_option_l1">Return</span>
              <span className="header_option_l2">Orders</span>
            </div>
          </Link>
          <Link to="/" className="header_links">
            <div className="header_option">
              <span className="header_option_l1">Your</span>
              <span className="header_option_l2">Prime</span>
            </div>
          </Link>
          <Link to="/cart" className="header_links">
            <div className="header_basket">
              <ShoppingBasketIcon />
              <span className="header_option_l2 basket_count">0</span>
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
