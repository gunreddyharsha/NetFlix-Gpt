import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    openGptPage: false,
    moviesResults: null,
    moviesName: null,
  },
  reducers: {
    gptSearchPage: (state, action) => {
      state.openGptPage = !state.openGptPage;
    },
    AddGptMovies: (state, action) => {
      const { moviesResults, moviesName } = action.payload;
      state.moviesResults = moviesResults;
      state.moviesName = moviesName;
    },
  },
});
export const { gptSearchPage, AddGptMovies } = GptSlice.actions;
export default GptSlice.reducer;
