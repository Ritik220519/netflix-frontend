import React from "react";
import Header from "./Header";
import useNowPlayingMovie from "./Hooks/useNowPlayingMovie";

const Browse = () => {
  useNowPlayingMovie();

  return (
    <>
      <Header />
      <div>browse</div>
    </>
  );
};

export default Browse;
