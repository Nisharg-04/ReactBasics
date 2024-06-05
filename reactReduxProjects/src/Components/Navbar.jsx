import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Navbar() {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <span className="Logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          HOME
        </Link>
        <Link className="navLink" to="/cart">
          CART
        </Link>
        <span className="cartCount">CART Items : {items.length}</span>
      </div>
    </>
  );
}

export default Navbar;
