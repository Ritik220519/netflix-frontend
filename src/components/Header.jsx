import axios from "axios";
import React, { useState } from "react";
import { API_OPTIONS, BASE_URL, SEARCH_MOVIE_API } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSearchMovieVideo} from "../Redux/moviesSlice";
import { removeUserInfo } from "../Redux/user";
const Header = () => {
  const [searchText, setSearchText] = useState([]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userInfo = useSelector((store) => store.user);
  if (!userInfo) return;

  const handlLogoutApi = async () => {
  
      await axios.post(BASE_URL + "/logout", { withCredentials: true });
      dispatch(removeUserInfo());
   
      navigate("/login");
 
  };

  const handleSearchAPI = async () => {
    const response = await axios.get(
      SEARCH_MOVIE_API + searchText,
      API_OPTIONS
    );

    console.log(response);
    dispatch(addSearchMovieVideo(response.data.results));
  };

  const handleSearchClick = () => {
    handleSearchAPI();
    navigate("/searchMovie");
  };

  return (
    <>
      <div className="py-2 bg-gradient-to-b from-black bg-gray-400 ">
        <div className="flex items-center justify-between gap-10  max-w-8xl mx-auto ">
          {/* Logo */}
          <Link to={"/"}>
            <img
              className="w-[120px] md:w-[150px]"
              src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="netflix-logo"
            />
          </Link>

          {/* Search */}
          <div className="flex gap-2">
            <input
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="hidden sm:block bg-gray-800 text-white rounded-lg px-4 py-2 w-60 focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              placeholder="Search"
            />
            <button
              className="px-4 bg-gray-400  rounded-2xl cursor-pointer"
              onClick={() => handleSearchClick()}
            >
              Search
            </button>
          </div>

          {/* Logout */}
          <div className="flex items-center gap-4">
            <p className="text-gray-300 text-lg font-medium ">{`Welcome ${userInfo?.user?.firstName}`}</p>
            <button
              className="bg-red-600 text-white px-4 py-2 mr-2 rounded-lg hover:bg-red-700 transition cursor-pointer"
              onClick={() => handlLogoutApi()}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
