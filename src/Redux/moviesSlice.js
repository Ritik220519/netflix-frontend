import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        addNowPlayingMovie : null,
    },
    reducers : {
        addNowPlayingMovie : (state , action)=>{
             state.addNowPlayingMovie = action.payload;
        }
    }
})

export const {addNowPlayingMovie} = moviesSlice.actions;
export default moviesSlice.reducer;