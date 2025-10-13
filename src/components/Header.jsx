import axios from "axios";
import React, { useState } from "react";
import { API_OPTIONS, BASE_URL, SEARCH_MOVIE_API } from "../utils/constant";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSearchMovieVideo } from "../Redux/moviesSlice";
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
      <div className="py-2 p-2 bg-gradient-to-b from-black bg-gray-400 text-xs md:text-lg ">
        <div className="flex flex-row md:flex-row justify-between items-center  gap-6">
          {/* Logo */}
          <Link to={"/"}>
            <img
              className="w-[70px] md:w-[150px]"
              src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
              alt="netflix-logo"
            />
          </Link>

          {/* Search */}
         <div className="flex flex-row ">

           <input
              name={searchText}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className=" text-center   bg-gray-800 text-white rounded-xl md:px-6  py-2  focus:outline-none focus:ring-2 focus:ring-red-500"
              type="text"
              placeholder="Search"
            />
            <button
              className="px-2 mx-2 bg-gray-400  rounded-2xl cursor-pointer"
              onClick={() => handleSearchClick()}
            >
              Search
            </button>

         </div>
           
       

          {/* Logout */}

          {/* <p className="text-gray-300 text-lg font-medium ">{`Welcome ${userInfo?.user?.firstName}`}</p> */}
          <button
            className="bg-red-600 text-white px-2 md:px-4 py-2  rounded-2xl hover:bg-red-700 transition cursor-pointer"
            onClick={() => handlLogoutApi()}
          >
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
