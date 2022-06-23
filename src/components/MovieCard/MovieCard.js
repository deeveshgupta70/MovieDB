import React from 'react'
import "./MovieCard.scss";
import { NavLink } from "react-router-dom";


const MovieCard = (props) => {
  const {data} = props;
  return (
        <div className="card-item">
      <NavLink to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default MovieCard