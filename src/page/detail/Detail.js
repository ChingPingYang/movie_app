import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Detail({ loading, movie, error }) {
  if (loading) return <h1>Loading page</h1>;
  if (error) return <h1>{error}</h1>;
  return (
    <div>
      <div>
        <h1>{movie.Title}</h1>
        <h3>{movie.Year}</h3>
        <h3>{movie.Type}</h3>
        <h3>{movie.Released}</h3>
        <h3>{movie.Genre}</h3>
        <div>
          <h2>Rating:</h2>
          {movie.Ratings.map((rating, index) => (
            <div key={index}>
              <h3>
                {rating.Source}: <span>{rating.Value}</span>
              </h3>
            </div>
          ))}
        </div>
        <ImageWrapper url={movie.Poster} />

        <Link to={`/`}>{"<- Go back"}</Link>
      </div>
    </div>
  );
}

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
`;

export default Detail;
