import { useState, useEffect } from "react";
import CardsPopular from "./CardsPopular";

const HomePopular = () => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const [movie, setMovie] = useState([]);

  const url = ` https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setMovie(data.results);
    };
    getData();
  }, []);

  return (
    <div className="relative  w-full h-full">
      <h1
        id="popular"
        className="text-2xl py-10 px-12  lg:text-3xl font-bold lg:p-20"
      >
        Populares
      </h1>
      <CardsPopular movie={movie} />
    </div>
  );
};
export default HomePopular;
