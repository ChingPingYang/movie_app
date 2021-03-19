import React from "react";

function Form({ searchInput, handleSearchInput, handleSubmitSearch }) {
  return (
    <section>
      <form onSubmit={handleSubmitSearch}>
        <input
          type="text"
          name="search"
          value={searchInput.search}
          onChange={handleSearchInput}
          required
        />
        <select
          name="type"
          value={searchInput.type}
          onChange={handleSearchInput}
        >
          <option value=""></option>
          <option value="movie">movie</option>
          <option value="series">series</option>
          <option value="episode">episode</option>
        </select>
        <input
          type="number"
          name="year"
          value={searchInput.year}
          onChange={handleSearchInput}
        />
        <button type="submit">search</button>
      </form>
    </section>
  );
}

export default Form;
