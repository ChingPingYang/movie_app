import React from "react";
import styled from "styled-components";

function Form({ searchInput, handleSearchInput, handleSubmitSearch }) {
  return (
    <Wrapper>
      <form onSubmit={handleSubmitSearch}>
        <input
          type="text"
          name="search"
          value={searchInput.search}
          onChange={handleSearchInput}
          placeholder="movie name"
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
          placeholder="year"
        />
        <button type="submit">search</button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin: 30px 0px;
  form {
    width: 600px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    input {
      padding-left: 10px;
    }
  }
`;

export default Form;
