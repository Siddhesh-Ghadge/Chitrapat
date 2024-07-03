// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/MSA-logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={Logo} alt="Logo" height="30px" width="80px" />
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-film"
            viewBox="0 0 16 16"
          >
            <path d="M0 1a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm4 0v6h8V1zm8 8H4v6h8zM1 1v2h2V1zm2 3H1v2h2zM1 7v2h2V7zm2 3H1v2h2zm-2 3v2h2v-2zM15 1h-2v2h2zm-2 3v2h2V4zm2 3h-2v2h2zm-2 3v2h2v-2zm2 3h-2v2h2z" />
          </svg> */}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {/* <li className="nav-item">
              <a className="nav-link active" aria-current="page" >
                Home
              </a>
            </li> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Genre
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item">Fantasy</a>
                </li>
                <li>
                  <a className="dropdown-item">Sci-fi</a>
                </li>
                <li>
                  <a className="dropdown-item">War & Politics</a>
                </li>
                <li>
                  <a className="dropdown-item">History</a>
                </li>
                <li>
                  <a className="dropdown-item">Romance</a>
                </li>
                <li>
                  <a className="dropdown-item">Action</a>
                </li>
                <li>
                  <a className="dropdown-item">Thriller</a>
                </li>
                <li>
                  <a className="dropdown-item">Horror</a>
                </li>
                <li>
                  <a className="dropdown-item">Documentry</a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/search" className="nav-link hover-effect">
                Trending
              </Link>
            </li>
          </ul>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
