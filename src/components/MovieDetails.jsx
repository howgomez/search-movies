import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import "./MovieDetails.css";
import Buttons from "./Buttons";
import { useMediaQuery } from "@uidotdev/usehooks";
import { Link } from "react-router-dom";

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
      <div className="container-image absolute top-0 right-0 left-0 h-screen w-full">
        <img
          className="img-details object-cover h-full  w-full"
          src={`https://image.tmdb.org/t/p/original/${imageUrl}.jpg`}
        />
      </div>
      <div className="container-info w-full lg:w-[70%] flex flex-col gap-4 absolute mt-[40%] lg:mt-[4%] p-4 lg:p-40">
        <h1 className="text-4xl md:text-4xl text-left">{movie.title}</h1>
        <span>{movie.release_date}</span>
        <span className="text-gray-400">{movie.tagline}</span>
        <p className="text-pretty text-gray-300 text-[12px] md:text-[17px]">
          {movie.overview}
        </p>
        <div className="buttons">
            <Buttons firstBtn="Play" SecondBtn="Ver información" url={pageUrl} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
