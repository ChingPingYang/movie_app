import React from "react";
import From from "../../component/Form";
import MovieCard from "../../component/MovieCard";

function Landing({
  searchInput,
  handleSearchInput,
  handleSubmitSearch,
  searchResult,
  totalPages,
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
      {/* {searchResult.Response === "False" && <h1> {searchResult.Error}</h1>} */}
      {totalPages.length > 0 &&
        totalPages.map((page) => <button key={page}>{page}</button>)}
    </div>
  );
}

export default Landing;
