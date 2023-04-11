import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <Link to="/">
          <img
            className="header-image"
            src="https://www.shutterstock.com/image-vector/og-initial-logo-260nw-1019978566.jpg"
          />
        </Link>
        <div className="search-box">
          <input type="text"></input>
        </div>
      </div>
      <div className="header-right">
        <Link to="/checkout">
          <div className="headerOption-busket">Cart</div>
        </Link>
      </div>
    </div>
  );
}
