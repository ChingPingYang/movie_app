import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function MovieCard({ movie }) {
  return (
    <div>
      <h1>{movie.Title}</h1>
      <h3>{movie.Year}</h3>
      <h3>{movie.Type}</h3>
      <ImageWrapper url={movie.Poster} />
      <Link to={`/${movie.imdbID}`}>Click me</Link>
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

export default MovieCard;
