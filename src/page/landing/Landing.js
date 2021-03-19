import React from "react";
import From from "../../component/Form";
import MovieCard from "../../component/MovieCard";
import styled from "styled-components";

function Landing({
  loading,
  searchInput,
  handleSearchInput,
  handleSubmitSearch,
  searchResult,
  totalPages,
  handlePageChange,
}) {
  if (loading) return <h1>Loading page</h1>;
  return (
    <Wrapper>
      <From
        searchInput={searchInput}
        handleSearchInput={handleSearchInput}
        handleSubmitSearch={handleSubmitSearch}
      />
      <CardWrapper>
        {searchResult?.Search?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}

        {!searchResult && <h1>first time visit</h1>}

        {searchResult?.Response === "False" && <h1> {searchResult.Error}</h1>}
      </CardWrapper>
      <section>
        {searchResult?.Response === "True" &&
          totalPages.length > 0 &&
          totalPages.map((page) => (
            <button key={page} onClick={() => handlePageChange(page)}>
              {page}
            </button>
          ))}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  border: solid 1px red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.section`
  border: solid 1px blue;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

export default Landing;
