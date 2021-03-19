import React from "react";
import Detail from "./Detail";
import axios from "axios";
function DetailContainer({
  match: {
    params: { id },
  },
}) {
  const [loading, setLoading] = React.useState(false);
  const [movie, setMovie] = React.useState(null);
  const [error, setError] = React.useState(null);
  React.useEffect(() => {
    const source = axios.CancelToken.source();
    const fetchMovieById = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios({
          method: "GET",
          url: "http://www.omdbapi.com/",
          params: { apikey: "c525e79", i: id },
          CancelToken: source.token,
        });
        if (res.data.Response === "True") {
          const {
            Title,
            Image,
            Year,
            Type,
            Released,
            Genre,
            Ratings,
          } = res.data;
          setMovie({
            Title,
            Image,
            Year,
            Type,
            Released,
            Genre,
            Ratings,
          });
        } else {
          setError(res.data.Error);
        }
      } catch (err) {
        console.log("something went wrogn");
      }
      setLoading(false);
    };
    fetchMovieById();
    return () => source.cancel();
  }, []);
  return <Detail loading={loading} movie={movie} error={error} />;
}

export default DetailContainer;
