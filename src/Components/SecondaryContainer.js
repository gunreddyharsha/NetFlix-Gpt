import MoviesList from "./MoviesList";
import { useSelector } from "react-redux";
import TvShowsList from "./TvShowsList";

const SecondaryContainer = () => {
  const { topMovies, popularMovies, upcomingMovies, trendingMovies } =
    useSelector((store) => store.Movies);

  const { AiringShows, popularTVShows, upcomingTvShows, TopRatedTvShows } =
    useSelector((store) => store.TVShows);

  const { movieSection, TvShowsSection } = useSelector(
    (store) => store.Sections,
  );

  if (!topMovies || !popularMovies || !upcomingMovies || !trendingMovies)
    return;

  if (!AiringShows || !popularTVShows || !upcomingTvShows || !TopRatedTvShows)
    return;

  return (
    <div className=" relative bg-black">
      <div className=" px-6  pb-4 -mt-28 ">
        {movieSection && (
          <>
            <MoviesList title="top Movies" movies={topMovies} />
            <MoviesList title="Popular Movies" movies={popularMovies} />
            <MoviesList title="Top Rated Movies" movies={topMovies} />
            <MoviesList title="Upcoming movies" movies={upcomingMovies} />
            <MoviesList title="Trending  movies" movies={trendingMovies} />
          </>
        )}
        {TvShowsSection && (
          <>
            <TvShowsList title="Airing Shows" TVshows={AiringShows} />
            <TvShowsList title="Popular Shows" TVshows={popularTVShows} />
            <TvShowsList title="Upcoming This Week" TVshows={upcomingTvShows} />
            <TvShowsList title="TopRated Shows" TVshows={TopRatedTvShows} />
          </>
        )}
      </div>
    </div>
  );
};

export default SecondaryContainer;
