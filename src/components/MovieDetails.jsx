import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import "./MovieDetails.css";
import { useMediaQuery } from "@uidotdev/usehooks";
import MovieDetailsCard from "./MovieDetailsCard";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);

  const isMobile = useMediaQuery("(min-width: 768px)");

  const pageUrl = movie.homepage;
  const imageUrl = isMobile ? movie.backdrop_path : movie.poster_path;
  const APIKEY = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchID = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${APIKEY}`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchID();
  }, [id]);

  if (!movie) return <h1>Loading...</h1>;

  return (
    <div className="container w-screen h-screen">
      <div className="text-white absolute top-0 left-0 right-0 z-10">
        <HeaderNavigation />
      </div>
      <MovieDetailsCard movie={movie} imageUrl={imageUrl} pageUrl={pageUrl} />
    </div>
  );
};

export default MovieDetails;
