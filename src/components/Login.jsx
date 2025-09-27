import React, { useState } from "react";
import Header from "./Header";
import axios from "axios";
import { BASE_URL } from "../utils/constant";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailId, setEmailId] = useState("vaishnavi@gmail.com");
  const [password, setPassword] = useState("Vaishnavi@1234");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const HandleSignInForn = () => {
    setIsSignInForm(!isSignInForm);
  };
  const loginApi = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        {
          emailId: emailId,
          password: password,
        },
        {withCredentials : true }
      );
      navigate("/browse");
      console.log(response);
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
      throw new Error("Login faield : ", error.response.data);
    }
  };

  const handleApiCall = () => {
    loginApi();
  };

  return (
    <div>
      <div className=" w-[180px] bg-gradient-to-b from-black absolute z-10">
        <img
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo"
        />
      </div>

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0b0dad79-ad4d-42b7-b779-8518da389976/web/IN-en-20250908-TRIFECTA-perspective_0647b106-80e1-4d25-9649-63099752b49a_large.jpg"
          alt="netflix-bg-logo"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute lg:w-4/12 p-12 m-4 my-20 mx-auto left-0 right-0 bg-black text-white opacity-80 rounded-2xl"
      >
        <div className="text-white font-bold text-4xl p-2">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </div>
        {!isSignInForm && (
          <input
            className="mt-6 m-2 p-4 w-full bg-gray-900 rounded-sm"
            type="text"
            value={firstName}
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        )}
        {!isSignInForm && (
          <input
            className=" m-2 p-4 w-full bg-gray-900 rounded-sm"
            type="text"
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        )}
        <input
          className=" m-2 p-4 w-full bg-gray-900 rounded-sm"
          type="text"
          value={emailId}
          placeholder="Email Id"
          onChange={(e) => setEmailId(e.target.value)}
        />
        <input
          className=" m-2 p-4 w-full bg-gray-900 rounded-sm"
          type="Password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <p className="m-2 text-red-500">{error}</p>
        <button
          className="m-2 p-2 w-full bg-red-500 rounded-sm cursor-pointer"
          onClick={() => handleApiCall()}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="m-2 p-2 cursor-pointer  "
          onClick={() => HandleSignInForn()}
        >
          {isSignInForm
            ? "New to Netflix? Sign up now."
            : "Already a Member: SignIn Now"}
        </p>
        <p className="m-2 p-2 text-sm">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
        </p>
      </form>
    </div>
  );
};

export default Login;
