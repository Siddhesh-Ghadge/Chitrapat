import React, { useEffect } from "react";
import './MovieDetails.css';

export default function MovieDetails({ dataMovie }) {

  useEffect(() => {
    return () => {
      // Cleanup when the component is unmounted
      dataMovie = {}
    };
  }, []);


  let gen = [];

if(dataMovie.genres){
  dataMovie.genres.map((n) => {
    gen.push(n.name);
  });
}

  console.log(gen);

  return (
    <div className="container my-5">
      <div className="row p-4 pe-lg-0 align-items-center rounded-3 border shadow-lg">
        <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
          <strong className="display-6 fw-bold lh-1 text-success">
            {dataMovie.title}
          </strong>
          <div>
            {gen.forEach((m) => {
              <span className="badge border border-secondary text-secondary rounded-pill m-1 mt-3">
                {m}
              </span>;
            })}
          </div>
          <p className="lead">{dataMovie.overview}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
            <a
              type="button"
              target="_blank"
              className="btn btn-outline-warning btn-lg px-4"
              href={dataMovie.homepage}
            >
              Watch Now
            </a>
          </div>
        </div>
        <div className="col-lg-3 offset-lg-1 p-0 overflow-hidden shadow-lg">
          <img
            className="image-cus rounded-lg-3 p-2"
            src={`https://image.tmdb.org/t/p/w500/${dataMovie.poster_path}`}
            alt=""
        
          />
        </div>
      </div>
    </div>
  );
}
