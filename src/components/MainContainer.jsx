import React from "react";
import { useSelector } from "react-redux";
import VideoBg from "./VideoBg";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const nowPlayingMovies = useSelector(
    (store) => store.movies.addNowPlayingMovie
  );
  
  if (!nowPlayingMovies) return;

  const mainMovie = nowPlayingMovies[0];

  const { overview, title, id } = mainMovie;
 

  return (
    <div>
      <VideoTitle overview={overview} title={title} />
      <VideoBg movieId={id} />
    </div>
  );
};

export default MainContainer;
