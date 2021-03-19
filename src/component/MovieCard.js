import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import imageNotFound from "../style/image-not-found.png";

function MovieCard({ movie }) {
  return (
    <Wrapper>
      <ImageWrapper
        url={movie.Poster === "N/A" ? imageNotFound : movie.Poster}
      />
      <ContentWrapper>
        <h1>{movie.Title}</h1>
        <h3>{movie.Year}</h3>
        <h3>{movie.Type}</h3>
        <Link to={`/${movie.imdbID}`}>Detail</Link>
      </ContentWrapper>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 300px;
  height: 400px;
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 5px 26px -10px rgba(0, 0, 0, 0.3);
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 210px;
  background: url(${(props) => props.url});
  background-position: center;
  background-size: cover;
`;
const ContentWrapper = styled.div`
  flex: 1;
  padding: 10px;
  h1 {
    font-size: 1.3rem;
  }
`;

export default MovieCard;
