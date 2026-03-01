import { createSlice } from "@reduxjs/toolkit";

const SectionsSlice = createSlice({
  name: "sectionSlice",
  initialState: {
    movieSection: true,
    TvShowsSection: true,
  },
  reducers: {
    showmovieSection: (state) => {
      state.TvShowsSection = false;
         state.movieSection = true;
    },
    showtvShowsSection: (state) => {
      state.movieSection = false;
      state.TvShowsSection = true;
    },
    showHomeSection: (state) => {
      state.movieSection= true;
      state.TvShowsSection= true;
    },
  },
});
export const {showHomeSection,showmovieSection,showtvShowsSection}=SectionsSlice.actions 
export default SectionsSlice.reducer