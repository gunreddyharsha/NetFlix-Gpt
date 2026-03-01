import { createSlice } from "@reduxjs/toolkit";

const MovieSlice = createSlice({
  name: "movies",
  initialState: {
    topMovies: null,
    movieTrailer: null,
    popularMovies: null,
    upcomingMovies: null,
    trendingMovies: null,
  },
  reducers: {
    addTopMovies: (state, action) => {
      state.topMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movieTrailer = action.payload;
    },
    addpopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addupcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTrendingMovies:(state,action)=>{
      state.trendingMovies=action.payload
    }
  },
});
export const {
  addTopMovies,
  addMovieTrailer,
  addpopularMovies,
  addTrendingMovies,
  addupcomingMovies,
} = MovieSlice.actions; 
export default MovieSlice.reducer