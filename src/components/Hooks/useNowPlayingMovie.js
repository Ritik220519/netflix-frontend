import axios from 'axios'
import React, { useEffect } from 'react'
import { API_OPTIONS, Now_Playing_movie } from '../../utils/constant'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovie } from '../../Redux/moviesSlice'

const useNowPlayingMovie = () => {

        const dispatch = useDispatch();

    const getNowPlayingMovies = async ()=>{

         const response = await axios.get(Now_Playing_movie , API_OPTIONS)
         console.log(response)
         dispatch(addNowPlayingMovie(response.data.results))
            
    }
    useEffect(()=>{
        getNowPlayingMovies();
    },[])

  
 

}

export default useNowPlayingMovie
