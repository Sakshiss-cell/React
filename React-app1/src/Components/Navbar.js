import React from "react";
import { Link } from "react-router-dom";
import icon from "./images/apple-touch-icon.png";

const Navbar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand img-fluid" href="#">
          <img src={icon} alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto align-self-center">
            <li class="nav-item active mr-20">
              <Link to="/" class="nav-link">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">
                About us
              </Link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link" href="https://api.whatsapp.com/send/?phone=919799181953&text=i_have_a_query&type=phone_number&app_absent=0">
                Contact us
              </a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <button type="submit">SIGNUP</button>
            <button type="submit">LOGIN</button>
          </form>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
