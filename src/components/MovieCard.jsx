import React from 'react'
import { TMDB_IMG_URL } from '../utils/constant'

const MovieCard = ({poster}) => {
  return (
 
        <div className='w-38 hover:w-42 cursor-pointer'>
            <img className='rounded-lg' src={TMDB_IMG_URL + poster} alt="poster-path" />
        </div>
      
 
  )
}

export default MovieCard
