import React, { useState, useEffect } from "react";
import axios from "../../utils/axios";
import requests from "../../utils/request";
import "./Banner.css"

export const Banner = () => {
  const [movie, setMovie] = useState({});


  useEffect(() => {
  const fetchData = async () => {
    try {
      console.log("Fetching movies..."); // debug start
      const request = await axios.get(requests.fetchNetflixOriginals);
      console.log("Movies received:", request.data.results); // log all results

      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length)
        ];
      console.log("Random movie selected:", randomMovie); // log random movie

      setMovie(randomMovie);
    } catch (error) {
      console.log("Error fetching movies:", error);
    }
  };

  fetchData();
}, []);

function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}


  return (
    <div
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="banner_contents">
        <h4 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h4>

        <div className="banner_buttons">
          <button className="banner_button play">Play</button>
          <button className="banner_button">My List</button>
        </div>

        <h1 className="banner_description"> {truncate(movie?.overview, 150)} </h1>
      </div>

      <div className="banner_fadeBottom" />
    </div>
  );
};
