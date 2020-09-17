import React, { useContext } from "react";
import "./Header.css";
import Logo from "../../img/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm  navbar-dark  fixed-top"
        id="main-nav"
      >
        <div className="container">
          <a href="index.html" className="navbar-brand">
            <Link to="/home">
            <img src={Logo} alt="" />
            </Link>
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
              <form className="form-inline my-2 my-lg-0">
                
                  <input
                    className="form-control search-place"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon1"
                  />

                
              </form>
              <li className="nav-item">
                <Link to="/home">
                  <a className="nav-link">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light">
                  Description
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light">
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light">
                  Contact
                </a>
              </li>
              {loggedInUser.loggedIn ? (
                <li className="nav-item">
                  <a className="nav-link text-warning">
                    {loggedInUser.name}
                  </a>
                </li>
              ) : (
                <Link to="/login">
                  <button type="button" className="btn btn-warning text-light">
                    Login
                  </button>
                </Link>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
