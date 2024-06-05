import useFetchMovies from "../assets/useFetchMovies";
import HeaderNavigation from "./HeaderNavigation";
import InputSearch from "./InputSearch";
import { useState } from "react";
import CardMovies from "./CardMovies";

const SearchMovies = () => {
  const [value, setValue] = useState("");
  const data = useFetchMovies(value);


  return (

    <div className="section-search">
      <HeaderNavigation />
      <InputSearch value={value} setValue={setValue} />

      <div className="movies-container">
        {data && data.results ? (
          data.results.map((movie) => (
            <CardMovies key={movie.id} movie={movie} />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
      
    </div>
  );
};

export default SearchMovies;
