import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const nowPlayingMovie = useSelector((store) => store.movies.addNowPlayingMovie);
  const popularMovie = useSelector((store) => store.movies.addPopularVideo);
  const topRatedMovie = useSelector((store)=> store.movies.addTopRatedVideo);
  const upcomingMovie = useSelector((store)=> store.movies.addUpcomingVideo);

  if (!nowPlayingMovie) return;
  if (!popularMovie) return;
  if (!topRatedMovie) return;
  if (!upcomingMovie) return;
  return (
    <div className="px-4  bg-black">
      <div className="-mt-78 relative z-50">
        <MovieList title={"Now Playing Movie"} movies={nowPlayingMovie} />
        <MovieList title={"Popular Movie"} movies={popularMovie} />
        <MovieList title={"Top Rated Movie"} movies={topRatedMovie}/>
        <MovieList title={"Up Coming Movie"} movies={upcomingMovie}/>
      </div>
    </div>
  );
};

export default SecondaryContainer;
