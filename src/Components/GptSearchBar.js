import React, { useRef, useState } from "react";
import { ai, API_OPTIONS } from "../utils/Consts";
import { useDispatch } from "react-redux";
import { AddGptMovies } from "../utils/GptSlice";

const GptSearchBar = () => {

  const searchMovies = useRef(null);
  const dispatch=useDispatch()
 const [isloading,setLoading]=useState(false)
  const searchMovieTMDB = async (movie) => {
    const url =
      "https://api.themoviedb.org/3/search/movie?query=" +
      movie +
      "&include_adult=false&language=en-US&page=1";

    let data = await fetch(url, API_OPTIONS);
    let json = await data.json();
    return json.results;
  };

  const submittingSearchData = async (e) => {
    e.preventDefault();
    setLoading(true)
    let prompte =
      "Act as movie Recomendation system and suggest some movies lfor the query:" +
      searchMovies.current.value +
      ".only give me of 10 movies ,comma seperated like the example ahead.Example Result:Saaho,Salaar,Bahubali,KGF,Jersey";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompte,
    });
    
    const searchResults = response.text.split(",");
    const PromiseArray = searchResults.map((movie) => searchMovieTMDB(movie));
    const TMDBResults = await Promise.all(PromiseArray);
    setLoading(false)
    dispatch(AddGptMovies({ moviesResults: TMDBResults ,moviesName:searchResults}));
  };

  return (
    <div className="pt-[8%] flex justify-center">
      <form
        onSubmit={submittingSearchData}
        className="w-1/2 bg-black  grid grid-cols-12 rounded-lg"
      >
        <input
          ref={searchMovies}
          type="text"
          placeholder="Search what do you want"
          className="p-4 m-4 rounded-lg col-span-9"
        />
        <button
          type="submit"
          className="bg-red-600 px-4 text-white rounded-lg py-2 m-4 col-span-3"
        >
          {isloading?"Loading..":"Search"}
      
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
