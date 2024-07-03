// FullPage.js
import React from "react";
import "./Homepage.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">
          The <br />
          Movie Search App
        </h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">
            This specific website allows users to search for films and
            television series.The TMDB Movie API is used to obtain all of the
            data. You may search for films and TV series by selecting the "Go to
            Search" button or the Genre dropdown from the Navbar above. Good
            luck with your search:)
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/search">
              <button
                type="button"
                className="btn btn-outline-success btn-lg px-4 me-sm-3 fw-bold"
              >
                Go to Search &gt;
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
