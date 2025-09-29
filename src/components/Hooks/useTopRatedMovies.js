import axios from "axios";
import { API_OPTIONS, TOPRATED_MOVIES_API } from "../../utils/constant";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTopRatedVideo } from "../../Redux/moviesSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const getTopRatedMovies = async () => {
    const response = await axios.get(TOPRATED_MOVIES_API, API_OPTIONS);

  
    dispatch(addTopRatedVideo(response.data.results));
  };
  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
