import axios from "axios"
import { useEffect } from "react"
import { API_OPTIONS, POPULAR_MOVIE_API } from "../../utils/constant"
import { useDispatch } from "react-redux"
import { addPopularVideo } from "../../Redux/moviesSlice"

const usePopularMovies = ()=>{

    const dispatch = useDispatch();

    const getPopularMovie = async() =>{
        const response = await axios.get(POPULAR_MOVIE_API , API_OPTIONS);
            dispatch(addPopularVideo(response.data.results));

    }

    useEffect(()=>{
        getPopularMovie()
    },[])
}

export default usePopularMovies;