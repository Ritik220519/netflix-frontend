import Header from "./Header";
import useNowPlayingMovie from "./Hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "./Hooks/usePopularMovies";
import useTopRatedMovies from "./Hooks/useTopRatedMovies";
import useUpcomingMovies from "./Hooks/useUpcomingMovies";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../Redux/user";

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const getProfileApi = async () => {
    if (user) return;

    try {
      const response = await axios.get(BASE_URL + "/profile", {
        withCredentials: true,
      });
      console.log("get profile", response);
      dispatch(userInfo(response?.data));
    } catch (error) {
      if (!user) {
        if (error.response && error.response.status === 401) {
          navigate("/login");
        }
      }
    }
  };

  useEffect(() => {
    // if (!user) {
    //   const storedUser = localStorage.getItem("user");
    //   dispatch(userInfo(JSON.parse(storedUser)));
    // }
    getProfileApi();
  }, []);

  useNowPlayingMovie();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      <>
        <MainContainer />

        <SecondaryContainer />
      </>
    </div>
  );
};

export default Browse;
