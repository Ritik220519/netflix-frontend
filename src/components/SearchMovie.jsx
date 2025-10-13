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
      <div className="flex flex-wrap justify-center p-4 bg-gray-950">
        {filteredMovies.map((movie) => (
          <div className="mx-6 py-4  ">
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
    </>
  );
};

export default SearchMovie;
