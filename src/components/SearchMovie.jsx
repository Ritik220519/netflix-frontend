import React from "react";
import { useSelector } from "react-redux";
import { TMDB_IMG_URL } from "../utils/constant";
import Header from "./Header";
import ShimmerSearchMovie from "./ShimmerSearchMovie";

const SearchMovie = () => {
  const searchMovies = useSelector((store) => store.movies.addSearchMovieVideo);

  if (!searchMovies) return <ShimmerSearchMovie />;


  const filteredMovies =  searchMovies.filter((movie) => movie.poster_path !== null);

  return (
    <>
      <Header />
      <div className="flex absolute z-20 bg-gradient-to-b from-black w-full">
        <img className="w-full" src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg" alt="" />
        <div className="flex justify-center flex-wrap absolute z-20">
            {filteredMovies.map((movie) => (
          <div className=" mx-6 py-4 ">
            <img
              className="w-48 rounded-xl hover:w-56 cursor-pointer"
              src={TMDB_IMG_URL + movie.poster_path}
              alt="poster-path"
            />
            <div className="text-white -mt-7">
              <span>⭐{Math.floor(movie.vote_average)}</span>
            </div>
          </div>
        ))}

        </div>
      
      </div>
    </>
  );
};

export default SearchMovie;
