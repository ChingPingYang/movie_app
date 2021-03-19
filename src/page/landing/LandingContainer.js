import React from "react";
import useFetchMovies from "../../util/useFetchMovies";
import { genPageArray } from "../../util/genPageArray";
import Landing from "./Landing";

function LandingContainer() {
  const [searchInput, setSearchInput] = React.useState({
    search: "",
    type: "",
    year: "",
    page: 1,
  });
  const [searchResult, setSearchResult] = React.useState(null);
  const [totalPages, setTotalPages] = React.useState([]);
  const isFirstRender = React.useRef(true);

  const { fetchMovies, loading, data, error } = useFetchMovies();

  // First load, check localStorage for old data. Only run once.
  React.useEffect(() => {
    const localInput = JSON.parse(localStorage.getItem("search-input"));
    const localResult = JSON.parse(localStorage.getItem("search-result"));
    if (localInput) setSearchInput(localInput);
    if (localResult) {
      setSearchResult(localResult);
      setTotalPages(genPageArray(localResult.totalResults));
    }
  }, []);

  // Runs whenever new data is fetched, except first load.
  React.useEffect(() => {
    // console.log(data);
    // console.log(error);
    if (!isFirstRender.current) {
      console.log("ch");
      console.log(data);
    }
    isFirstRender.current = false;
  }, [data, error]);

  const handleSearchInput = (e) => {
    setSearchInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    localStorage.setItem("search-input", JSON.stringify(searchInput));
    fetchMovies(searchInput);
  };

  return (
    <Landing
      searchInput={searchInput}
      handleSearchInput={handleSearchInput}
      handleSubmitSearch={handleSubmitSearch}
      searchResult={searchResult}
      totalPages={totalPages}
    />
  );
}

export default LandingContainer;
