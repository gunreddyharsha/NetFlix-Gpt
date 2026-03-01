import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./UserSlice";
import MoviesReducer from "./MovieSlice";
import GptPage from "./GptSlice";
import TVShowsreducer from "./TVShowsSlice"
import SectionReducer from "./SectionsSlice"
const AppStore = configureStore({
  reducer: {
    user: UserReducer,
    Movies: MoviesReducer,
    gpt: GptPage,
    TVShows:TVShowsreducer,
    Sections:SectionReducer
  },
});
export default AppStore;
