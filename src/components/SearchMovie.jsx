import React from 'react'
import { useSelector } from 'react-redux'
import { TMDB_IMG_URL } from '../utils/constant'
import Header from "./Header";



const SearchMovie = () => {

  const searchMovies = useSelector((store)=>store.movies.addSearchMovieVideo);
  
  if(!searchMovies) return <div>No Movie Found</div>

  console.log("search : " ,  searchMovies)

  return (
    <>
    <Header/>
     <div className='flex flex-wrap justify-center p-4 bg-gray-950'>
      {searchMovies.map((movie)=>(
        
         <div className='mx-6 py-4  '>
          
        <img className='w-48 rounded-xl hover:w-56 cursor-pointer' src={TMDB_IMG_URL + movie.poster_path || movie.poster_path[0] } alt="poster-path" />
        <div className="text-white -mt-7">
          <span>⭐{Math.floor( movie.vote_average)}</span>
        </div>
      </div>

      ))}
     
    </div>
    </>
   
  )
}

export default SearchMovie
