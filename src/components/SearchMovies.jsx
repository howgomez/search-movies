import useFetchMovies from "../assets/useFetchMovies";
import HeaderNavigation from "./HeaderNavigation";
import InputSearch from "./InputSearch";
import { useState } from "react";
import CardMovies from "./CardMovies";
const SearchMovies = () => {
  const [value, setValue] = useState("");
  const data = useFetchMovies(value);

  return (
    <>
      <HeaderNavigation />
      <div className="section-search absolute top-0 left-0 right-0 z-10 mt-20">
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
    </>
  );
};

export default SearchMovies;
