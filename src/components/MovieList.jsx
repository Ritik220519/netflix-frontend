import React from "react";
import { TMDB_IMG_URL } from "../utils/constant";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-white">{title}</h2>
    
        <div className="flex py-5  overflow-x-scroll ">
             <div className="flex gap-4">
          {movies && movies.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
