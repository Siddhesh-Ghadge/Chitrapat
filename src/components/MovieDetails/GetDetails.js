import React, { useEffect, useState } from "react";
import MovieDetails from "./MovieDetails";
import { useParams } from "react-router-dom";

export default function GetDetails() {
  const [movieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      let headersList = {
        Accept: "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiN2Y5MjA3NmYwNjIzOTI5NDAzYTgyNjliNmVmMjNmZCIsInN1YiI6IjY1MmNlNDgxMDI0ZWM4MDBjNzc1MDdmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eDL_-1EZb8AuQuq97rGh14lcQkcIy3P5y0--mLKss24",
      };

      try {
        let response = await fetch(
          "https://api.themoviedb.org/3/movie/" + id,
          {
            method: "GET",
            headers: headersList,
          }
        );

        let data = await response.json();

        // Update the state with the fetched data
        setMovieDetails(data);

        console.log(data); // You can also log the data here if needed
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    getDetails();
  }, [id]);

  if (!movieDetails) {
    // You can add a loading indicator here if needed
    return <p>Loading...</p>;
  }

  return <MovieDetails dataMovie={movieDetails} />;
}
