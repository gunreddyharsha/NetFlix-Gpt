import React from 'react'
import GptSearchBar from "./GptSearchBar";
import GPTMovieSuggestions from './GPTMovieSuggestions';

const GptSearch = () => {

  return (
    <div>
      <div className="fixed -z-20">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/e49aba81-ee7c-4f19-baef-7c54bbab003e/web/IN-en-20260202-TRIFECTA-perspective_04f5de39-b518-493c-9a8d-6aef11af0457_large.jpg"
          alt="bgImage"
          className="h-screen w-screen"
        />
      </div>

      <GptSearchBar />
      <GPTMovieSuggestions />
    </div>
  );
}

export default GptSearch
