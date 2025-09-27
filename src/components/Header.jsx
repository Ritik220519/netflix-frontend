import axios from "axios";
import React from "react";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const handlLogoutApi = async () => {
    try {
      await axios.post(BASE_URL + "/logout", { withCredentials: true });
      navigate("/");
    } catch (error) {
      throw new Error(error.response.data);
    }
  };
  return (
    <div className="p-2 bg-gradient-to-b to-black  ">
      <div className="flex flex-row justify-between">
        <img
          className="w-[150px]"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
        <div className="flex items-center  ">
         <input className="p-2 bg-gray-700 text-white rounded-lg" type="text" placeholder="Search" />
         <button
          className="bg-red-600 text-white px-4 py-2 m-3  rounded-2xl cursor-pointer"
          onClick={() => handlLogoutApi()}
        >
          Logout
        </button>
        </div>
       

        
      </div>
    </div>
  );
};

export default Header;
