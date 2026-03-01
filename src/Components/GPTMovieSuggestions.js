import React from 'react'
import { useSelector } from 'react-redux'
import MoviesList from './MoviesList';

const GPTMovieSuggestions = () => {

const { moviesResults, moviesName } = useSelector((store) => store.gpt); 

if (!moviesName) return;

  return (
    <div className='bg-black bg-opacity-80'> 
      {moviesName.map((movieName, index) => (
        <MoviesList
          key={movieName}
          title={movieName}
          movies={moviesResults[index]}
        />
      ))}
    </div>
  );
}


export default GPTMovieSuggestions
