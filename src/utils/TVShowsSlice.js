import { createSlice } from "@reduxjs/toolkit";

const TVShowsSlice=createSlice({
    name:"TVShows",
    initialState:{
        AiringShows:null,
        popularTVShows:null,
        TvshowTrailer:null,
        upcomingTvShows:null,
        TopRatedTvShows:null
    },
    reducers:{
        addAiringShows:(state,action)=>{
            state.AiringShows=action.payload
        },
        addPopularTVShows:(state,action)=>{
            state.popularTVShows=action.payload
        },
        addTvShowTrailer:(state,action)=>{
            state.TvshowTrailer=action.payload
        },
        addUpcomingTvShows:(state,action)=>{
            state.upcomingTvShows=action.payload
        },
        addTopRatedTvShows:(state,action)=>{
            state.TopRatedTvShows=action.payload
        }
    }
})
export const {
  addAiringShows,
  addPopularTVShows,
  addTvShowTrailer,
  addUpcomingTvShows,
  addTopRatedTvShows,
} = TVShowsSlice.actions; 
export default TVShowsSlice.reducer