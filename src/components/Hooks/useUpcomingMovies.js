import axios from "axios"
import { API_OPTIONS, UPCOMING_MOVIES_API } from "../../utils/constant";
import {useDispatch} from "react-redux";
import { addUpcomingVideo } from "../../Redux/moviesSlice";
import { useEffect } from "react";

const useUpcomingMovies = ()=>{

    const dispatch = useDispatch()

    const getUpcomingMovies = async() =>{
        const response = await axios.get(UPCOMING_MOVIES_API , API_OPTIONS);
            dispatch(addUpcomingVideo(response.data.results))
    }

    useEffect(()=>{
        getUpcomingMovies();
    },[])

}

export default useUpcomingMovies;