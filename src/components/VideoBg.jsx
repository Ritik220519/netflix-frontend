import React from "react";
import useTrailerMovies from "./Hooks/useTrailerMovies";
import { useSelector } from "react-redux";

const VideoBg = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies.addTrailerVideo);

  useTrailerMovies(movieId);
 
  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/MbohuBUxcRU?si=" +
          trailerVideo?.key +
          "&autoplay=1&mute=1"
        }
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBg;
