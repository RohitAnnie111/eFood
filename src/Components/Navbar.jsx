import { Model } from "mongoose";
import { useState } from "react";
import { Badge } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import Cart from "../Screening/cart";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useCart } from "../Components/ContextReducer";
import Modal from "../Components/Model";

export default function Navbar() {
  const [cartView, setCartView] = useState(false);  

  let data = useCart();

  const navigate = useNavigate();
  const isAuthenticated = Boolean(localStorage.getItem("authToken"));

  const logouthandle = () => {
    localStorage.removeItem("authToken");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg  fs-2">
      <div className="container-fluid">
       <div><img id="logo" src="eFood.png"></img></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 ">
            <li className="nav-item"></li>
          </ul>

          {!isAuthenticated ? (
            <div className="d-flex">
              <NavLink
                to="Login"
                className="nav-link btn bg-white text-success mx-1"
              >
                Login
              </NavLink>

              <NavLink
                to="Signup"
                className="nav-link btn bg-white text-success mx-1"
              >
                Signup
              </NavLink>
            </div>
          ) : (
            <div className="d-flex">
              <div>
                <NavLink
                  to=""
                  className="nav-link btn bg-white text-success mx-2"
                  onClick={() => setCartView(true)}
                >
                  My Cart{" "}
                  <Badge pill bg="danger">
                    {data.length}
                  </Badge>
                </NavLink>
              </div>

              {cartView && (
                <Modal onClose={() => setCartView(false)}>
                  <Cart />
                </Modal>
              )}

              <div>
                <NavLink
                  to=""
                  className="nav-link btn bg-white text-success mx-2"
                  onClick={logouthandle}
                >
                  Logout
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
