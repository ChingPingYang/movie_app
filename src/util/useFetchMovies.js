import React from "react";
import axios from "axios";

function useFetchMovies() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [query, setQuery] = React.useState(null);
  const isFirstRender = React.useRef(true);

  // First load, check localStorage for old data. Only run once.

  React.useEffect(() => {
    const source = axios.CancelToken.source();
    if (!isFirstRender.current) {
      const apiCall = async () => {
        setLoading(true);
        try {
          const res = await axios({
            method: "GET",
            url: "http://www.omdbapi.com/",
            params: query,
            CancelToken: source.token,
          });
          console.log(res);
          if (res.status === 200) {
            setData(res.data);
            localStorage.setItem("search-result", JSON.stringify(res.data));
          }
        } catch (err) {
          console.log("something went wrogn");
        }
        setLoading(false);
      };
      apiCall();
    }
    isFirstRender.current = false;
    return () => source.cancel();
  }, [query]);

  const fetchMovies = (query) => {
    if (query.search === "") return window.alert("Search field is required.");
    localStorage.setItem("search-input", JSON.stringify(query));
    const param = { apikey: "c525e79", s: query.search, page: query.page };
    if (query.type !== "") param.type = query.type;
    if (query.year !== "") param.y = query.year;
    setQuery(param);
  };

  return { fetchMovies, loading, data };
}

export default useFetchMovies;
