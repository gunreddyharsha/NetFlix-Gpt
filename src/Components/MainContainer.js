import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import TitleCard from "./TitleCard";
import VideoBackground from "./VideoBackground";
import VideoBgforTvShows from "./VideoBgforTvShows";



const MainContainer = () => {
  const movies = useSelector((store) => store.Movies.topMovies);
  const tvShows = useSelector((store) => store.TVShows.popularTVShows);
  const { movieSection } = useSelector(
    (store) => store.Sections,
  );

  if (!movies || !tvShows) return;

  const movieData = movies[2];

  const { original_title, overview, id } = movieData;

  const tvShowData = tvShows[5];

  return (
    <div className="w-200px">
      {movieSection ? (
        <>
          <TitleCard original_title={original_title} overview={overview} />
          <VideoBackground movieId={id} />
        </>
      ) : (
        <>
          <TitleCard
            original_title={tvShowData.name}
            overview={tvShowData.overview}
          />
          <VideoBgforTvShows Tvshowid={tvShowData.id} />
        </>
      )}
    </div>
  );
};

export default MainContainer;
