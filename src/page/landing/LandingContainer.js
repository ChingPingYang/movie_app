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

  const { fetchMovies, loading, data } = useFetchMovies();

  // First load, check localStorage for old data. Only run once.
  React.useEffect(() => {
    const localInput = JSON.parse(localStorage.getItem("search-input"));
    const localResult = JSON.parse(localStorage.getItem("search-result"));
    if (localInput) setSearchInput(localInput);
    if (localResult) {
      setSearchResult(localResult);
      if (localResult.totalResults)
        setTotalPages(genPageArray(localResult.totalResults));
    }
  }, []);

  // Runs whenever new data is fetched, except first load.
  React.useEffect(() => {
    if (!isFirstRender.current) {
      console.log("Fetch data from server");
      setSearchResult(data);
      if (data.totalResults) setTotalPages(genPageArray(data.totalResults));
    }
    isFirstRender.current = false;
  }, [data]);

  const handleSearchInput = (e) => {
    setSearchInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    fetchMovies(searchInput);
  };

  const handlePageChange = (id) => {
    fetchMovies({ ...searchInput, page: id });
  };

  return (
    <Landing
      loading={loading}
      searchInput={searchInput}
      handleSearchInput={handleSearchInput}
      handleSubmitSearch={handleSubmitSearch}
      searchResult={searchResult}
      totalPages={totalPages}
      handlePageChange={handlePageChange}
    />
  );
}

export default LandingContainer;
