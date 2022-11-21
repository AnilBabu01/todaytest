import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import "./Navbar.css";
const Navbar = () => {
  const [rerenser, setrerenser] = useState(false);
  const alert = useAlert();
  useEffect(() => {}, [rerenser]);
  const logout = () => {
    localStorage.removeItem("todaytoken");
    setrerenser(true);
    alert.error("You have logout succesffly");
  };
  return (
    <>
      <nav className="navstyel">
        <ul className="navlist">
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          {localStorage.getItem("todaytoken") ? (
            <>
              <li onClick={logout}>
                {" "}
                <Link to="/login">logout</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/login">login</Link>
              </li>
            </>
          )}

          <li>
            {" "}
            <Link to="/register">Register</Link>
          </li>
          <li>
            {" "}
            <Link to="/order">Order</Link>
          </li>
          <li>
            {" "}
            <Link to="/myorders">My order</Link>
          </li>
          <li>
            {" "}
            <Link to="/addstaff"> AddStaff</Link>
          </li>
          <li>
            {" "}
            <Link to="/stafflist">Delete Staff</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
