import React from "react";
import From from "../../component/Form";
import MovieCard from "../../component/MovieCard";

function Landing({
  searchInput,
  handleSearchInput,
  handleSubmitSearch,
  searchResult,
  totalPages,
  handlePageChange,
}) {
  return (
    <div>
      <From
        searchInput={searchInput}
        handleSearchInput={handleSearchInput}
        handleSubmitSearch={handleSubmitSearch}
      />
      <div>
        {searchResult?.Search?.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
      {!searchResult && <h1>first time visit</h1>}
      {searchResult?.Response === "False" && <h1> {searchResult.Error}</h1>}
      {searchResult?.Response === "True" &&
        totalPages.length > 0 &&
        totalPages.map((page) => (
          <button key={page} onClick={() => handlePageChange(page)}>
            {page}
          </button>
        ))}
    </div>
  );
}

export default Landing;
