import React from "react";
import "./Header.css";
import Logo from "../../img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm  navbar-dark  fixed-top"
        id="main-nav"
      >
        <div className="container">
          <a href="index.html" className="navbar-brand">
            <img src={Logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav ml-auto">
              <div className="search_box d-inline">
                <input
                  type="text"
                  placeholder="what are you looking for?"
                  className="form-control mr-sm-2"
                />
                <FontAwesomeIcon icon={faSearch} className="fa-search" />
              </div>
              <li class="nav-item">
                <Link to="/home">
                <a class="nav-link" href="#">Home</a>
                </Link>
                  
                
              </li>
              <li className="nav-item">
                <a href="#explore-head-section" className="nav-link text-light">
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a href="#create-head-section" className="nav-link text-light">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a href="#share-head-section" className="nav-link text-light">
                  Contact
                </a>
              </li>
              <button type="button" className="btn btn-warning text-light">
                Login
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
