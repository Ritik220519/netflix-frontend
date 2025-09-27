import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        addNowPlayingMovie : null,
        addTrailerVideo : null,
        addPopularVideo : null
    },
    reducers : {
        addNowPlayingMovie : (state , action)=>{
             state.addNowPlayingMovie = action.payload;
        },
        addTrailerVideo : (state , action)=>{
            state.addTrailerVideo = action.payload;
        },
         addPopularVideo : (state , action)=>{
            state.addPopularVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovie , addTrailerVideo , addPopularVideo} = moviesSlice.actions;
export default moviesSlice.reducer;