import React from "react";
import "./Movie.css";
import unavailable from "../../assets/unavailable-image.jpg";
import { useNavigate } from "react-router-dom";

export default function ({ key, title, poster, releaseDate, votes, id, name }) {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/detailsPage/${id}`);
  };

  return (
    <div className="col hover-effect">
      <div
        className="card bg-dark shadow-sm"
        data-bs-theme="dark"
        onClick={() => handleCardClick(id)}
      >
        {poster != null ? (
          <img
            className="bd-placeholder-img card-img-top cus-image"
            src={`https://image.tmdb.org/t/p/w500/${poster}`}
            alt={title}
          />
        ) : (
          <img
            className="bd-placeholder-img card-img-top ratio ratio-1x1"
            src={unavailable}
            alt={title}
          />
        )}

        <rect width="100%" height="100%" fill="#55595c" />

        <div className="card-body">
          {title ? (
            <h5 className="card-title">{title}</h5>
          ) : (
            <h5 className="card-title">{name}</h5>
          )}

          <div className="d-flex justify-content-between align-items-center">
            {/* <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-danger">
                Horrer
              </button>
              <button type="button" className="btn btn-sm btn-outline-danger">
                Thriller
              </button>
            </div> */}
            <small className="text-info">{releaseDate}</small>

            <small className="text-warning">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              &nbsp;{votes}
            </small>
          </div>
        </div>
      </div>

      {/* <p>Release Date: {releaseDate}</p>
      <p>{overview}</p> */}
    </div>

    // <div
    //   className="col"
    //   key={movie.id}
    //   title={movie.title}
    //   // poster={movie.poster_path}
    //   releaseDate={movie.release_date}
    //   // overview={movie.overview}
    // >
    //   <div className="card shadow-sm">
    //     <img
    //       className="bd-placeholder-img card-img-top"
    //       src={`https://image.tmdb.org/t/p/w500/${poster}`}
    //       alt={title}
    //     />

    //     <title>Placeholder</title>
    //     <rect width="100%" height="100%" fill="#55595c" />

    //     <div className="card-body">
    //       <h5 className="card-title">{title}</h5>
    //       <div className="d-flex justify-content-between align-items-center">
    //         <div className="btn-group">
    //           <button type="button" className="btn btn-sm btn-outline-danger">
    //             Horrer
    //           </button>
    //           <button type="button" className="btn btn-sm btn-outline-danger">
    //             Thriller
    //           </button>
    //         </div>
    //         <small className="text-danger">{releaseDate}</small>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
}
