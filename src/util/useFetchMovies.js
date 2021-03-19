import React from "react";
import axios from "axios";

function useFetchMovies() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [query, setQuery] = React.useState(null);
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    const source = axios.CancelToken.source();
    if (!isFirstRender.current) {
      const apiCall = async () => {
        setLoading(true);
        setError(null);
        try {
          const res = await axios({
            method: "GET",
            url: "http://www.omdbapi.com/",
            params: query,
            CancelToken: source.token,
          });
          if (res.data.Response === "True") {
            setData(res.data);
            localStorage.setItem("search-result", JSON.stringify(res.data));
          } else {
            setData(null);
            setError(res.data.Error);
          }
        } catch (err) {
          setError(err.response);
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
    const param = { apikey: "c525e79", s: query.search, page: query.page };
    if (query.type !== "") param.type = query.type;
    if (query.year !== "") param.y = query.year;
    setQuery(param);
  };

  return { fetchMovies, loading, data, error };
}

const dataA = {
  Search: [
    {
      Title: "My Mom's New Boyfriend",
      Year: "2008",
      imdbID: "tt0780534",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDU5YjQ1MTUtMjhmOS00YzczLWEwZjUtMmI1NWE2Zjg4NGFlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
      Title: "My Girlfriend's Boyfriend",
      Year: "2010",
      imdbID: "tt1447793",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMmFjZTc0ZTUtMmNjOC00YmIyLTkxNGItNWQzODE2NjM4ZWY5XkEyXkFqcGdeQXVyMTY5Nzc4MDY@._V1_SX300.jpg",
    },
    {
      Title: "A Boyfriend for My Wife",
      Year: "2008",
      imdbID: "tt1280534",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTRlMjI4YTktMDQxMC00OWI2LWE4NTAtYTk1OWE2YjBkYmM1XkEyXkFqcGdeQXVyMzU1ODUxOTk@._V1_SX300.jpg",
    },
    {
      Title: "A Boyfriend for Christmas",
      Year: "2004",
      imdbID: "tt0385567",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTcyNjY4NDg0NV5BMl5BanBnXkFtZTcwNTA1NjMzMQ@@._V1_SX300.jpg",
    },
    {
      Title: "Mike Birbiglia: My Girlfriend's Boyfriend",
      Year: "2013",
      imdbID: "tt2937390",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYTk2NzdlNTktNmRlNy00NGUxLTg4N2YtOWVmOGYzZDFjYjMwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "The Boyfriend School",
      Year: "1990",
      imdbID: "tt0099450",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZTViZTM2MzktYjllNi00NTIwLWE5MzQtYTZmODBjMzYwY2Q3XkEyXkFqcGdeQXVyNjkwNTg3NDY@._V1_SX300.jpg",
    },
    {
      Title: "My Future Boyfriend",
      Year: "2011",
      imdbID: "tt1747924",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjI0NTk4MDgzNF5BMl5BanBnXkFtZTcwMTE0MzMwNQ@@._V1_SX300.jpg",
    },
    {
      Title: "Jane Wants a Boyfriend",
      Year: "2015",
      imdbID: "tt3302654",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzQ4ODkwNzY1NV5BMl5BanBnXkFtZTgwMTQwMzQxMzE@._V1_SX300.jpg",
    },
    {
      Title: "Girlfriend Boyfriend",
      Year: "2012",
      imdbID: "tt2319760",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYjZhOWI0YTktZTFmZi00MDQwLTk0NzctYWEwNTJlMWQ4NTI3XkEyXkFqcGdeQXVyMjg0MTI5NzQ@._V1_SX300.jpg",
    },
    {
      Title: "Charlotte and Her Boyfriend",
      Year: "1960",
      imdbID: "tt0051472",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BY2U1MzY0OTgtOTFjYi00NGY0LTlhNDYtMjI3ZmY1MzU0MTliXkEyXkFqcGdeQXVyNTM3MDMyMDQ@._V1_SX300.jpg",
    },
  ],
  totalResults: "165",
  Response: "True",
};

export default useFetchMovies;
