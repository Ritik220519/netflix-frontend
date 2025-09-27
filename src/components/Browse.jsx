import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "./Hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./Hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovie();
  usePopularMovies();
  

  return (
    <div>
      <Header />
      <>
         <MainContainer/>
     <SecondaryContainer/>
      </>
  
    </div>
  );
};

export default Browse;
