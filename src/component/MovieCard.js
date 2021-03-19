import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function MovieCard({ movie }) {
  return (
    <Wrapper>
      <ImageWrapper url={movie.Poster} />
      <h1>{movie.Title}</h1>
      <h3>{movie.Year}</h3>
      <h3>{movie.Type}</h3>
      <Link to={`/${movie.imdbID}`}>Click me</Link>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  border: solid 1px red;
  width: 300px;
  height: 400px;
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 230px;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
`;

export default MovieCard;
