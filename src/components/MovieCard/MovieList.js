// MovieList.js
import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./Movie.css";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [isSearched, toggleSearched] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const OnSearch = async (search) => {
    let headersList = {
      Accept: "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2Y5MjA3NmYwNjIzOTI5NDAzYTgyNjliNmVmMjNmZCIsInN1YiI6IjY1MmNlNDgxMDI0ZWM4MDBjNzc1MDdmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDL_-1EZb8AuQuq97rGh14lcQkcIy3P5y0--mLKss24",
    };

    let response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        search +
        "&include_adult=false&language=en-US&page=1",
      {
        method: "GET",
        headers: headersList,
      }
    );

    let data = await response.json();
    console.clear();
    console.log(data);

    setMovies(data.results);
  };

  useEffect(() => {
    const Trending = async () => {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2Y5MjA3NmYwNjIzOTI5NDAzYTgyNjliNmVmMjNmZCIsInN1YiI6IjY1MmNlNDgxMDI0ZWM4MDBjNzc1MDdmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDL_-1EZb8AuQuq97rGh14lcQkcIy3P5y0--mLKss24",
      };

      let response = await fetch(
        "https://api.themoviedb.org/3/trending/all/day?language=en-US",
        {
          method: "GET",
          headers: headersList,
        }
      );

      let data = await response.json();
      console.clear();
      console.log(data);

      setMovies(data.results);
    };

    Trending();
  }, []);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputValue) {
      toggleSearched(true);
      OnSearch(inputValue);
    } else {
      window.location.reload();
      toggleSearched(false);
    }
  };

  return (
    <div className="album py-4  bg-body-dark">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control bg-dark text-secondary"
          style={{ color: "white" }}
          placeholder="Movie name..."
          aria-label="Movie Name"
          aria-describedby="button-addon2"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={handleSubmit}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          {/* <FaSearch /> */}
        </button>
      </div>
      {isSearched ? (
        <h1 style={{ fontSize: "20px" }}>
          Results for :
          <span id="searched_name" style={{ color: "yellowgreen" }}>
            {inputValue}
          </span>
        </h1>
      ) : (
        <h1 style={{ fontSize: "20px", color: "yellowgreen" }}>Trending</h1>
      )}
      <div className="container mt-3">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-5 g-3">
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              name={movie.name}
              poster={movie.poster_path}
              releaseDate={movie.release_date}
              votes={movie.vote_average}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
