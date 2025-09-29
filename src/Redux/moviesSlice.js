import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name : "movies",
    initialState : {
        addNowPlayingMovie : null,
        addTrailerVideo : null,
        addPopularVideo : null,
        addTopRatedVideo : null,
        addUpcomingVideo : null,
        addSearchMovieVideo :[],
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
        },
        addTopRatedVideo : (state , action)=>{
            state.addTopRatedVideo = action.payload;
        },
        addUpcomingVideo : (state , action)=>{
            state.addUpcomingVideo = action.payload;
        },
        addSearchMovieVideo : (state , action)=>{
            state.addSearchMovieVideo = action.payload;

        }
    }
})

export const {addNowPlayingMovie , addTrailerVideo , addPopularVideo , addTopRatedVideo , addUpcomingVideo , addSearchMovieVideo} = moviesSlice.actions;
export default moviesSlice.reducer;