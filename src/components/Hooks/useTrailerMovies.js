import axios from 'axios'
import React, { useEffect } from 'react'
import { API_OPTIONS, TRAILER_VIDEO_API } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../../Redux/moviesSlice'

const useTrailerMovies = (movieId) => {

    const dispatch = useDispatch();
 
    const getTrilerMovies = async ()=>{

       const response = await axios.get("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", API_OPTIONS);
            

            const filteredMovie = response.data.results.filter((movie)=> movie.type === "Teaser")
            const trailer = filteredMovie.length ? filteredMovie[0] : response.data.results[0];

            dispatch(addTrailerVideo(trailer));
           
            
    }



    
    useEffect(()=>{
        getTrilerMovies();
    },[])
}

export default useTrailerMovies
