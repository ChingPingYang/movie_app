import React from "react";
import Detail from "./Detail";
function DetailContainer() {
  return <Detail />;
}
const data = {
  Title: "White Boy Rick",
  Year: "2018",
  Rated: "R",
  Released: "14 Sep 2018",
  Runtime: "111 min",
  Genre: "Crime, Drama",
  Director: "Yann Demange",
  Writer: "Andy Weiss, Logan Miller, Noah Miller",
  Actors:
    "Matthew McConaughey, Richie Merritt, Bel Powley, Jennifer Jason Leigh",
  Plot:
    "The story of teenager Richard Wershe Jr., who became an undercover informant for the FBI during the 1980s and was ultimately arrested for drug-trafficking and sentenced to life in prison.",
  Language: "English",
  Country: "USA",
  Awards: "2 nominations.",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNjQ5MzY4NjQ4Nl5BMl5BanBnXkFtZTgwMzc1NjU4NjM@._V1_SX300.jpg",
  Ratings: [
    {
      Source: "Internet Movie Database",
      Value: "6.5/10",
    },
    {
      Source: "Rotten Tomatoes",
      Value: "57%",
    },
    {
      Source: "Metacritic",
      Value: "59/100",
    },
  ],
  Metascore: "59",
  imdbRating: "6.5",
  imdbVotes: "30,455",
  imdbID: "tt4537896",
  Type: "movie",
  DVD: "12 Dec 2018",
  BoxOffice: "$24,011,188",
  Production: "Studio 8",
  Website: "N/A",
  Response: "True",
};
export default DetailContainer;
