import { configureStore  } from "@reduxjs/toolkit";
import moviesReducer from "./moviesSlice";
import  userReducer  from "./user";
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    user : userReducer,
    
  },
});

export default store;
