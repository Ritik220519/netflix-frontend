import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "./Hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./Hooks/usePopularMovies";
import useTopRatedMovies from "./Hooks/useTopRatedMovies";
import useUpcomingMovies from "./Hooks/useUpcomingMovies";


const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();


 

  return (
    <div>
      <Header />
      <>
        <MainContainer /> 

        <SecondaryContainer />
      </>
    </div>
  );
};

export default Browse;
