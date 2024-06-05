import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderNavigation from "./HeaderNavigation";
import "./MovieDetails.css";
import Buttons from "./Buttons";
const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchID = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=dffeffbf7be3182ad0f191c3f7edea22`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchID();
  }, [id]);

  if (!movie) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <div className="text-white absolute top-0 left-0 right-0 z-10">
        <HeaderNavigation />
      </div>
      <div className="container-image absolute top-0 right-0 left-0">
        <img
          className="object-cover h-screen w-screen"
          src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}.jpg`}
        />
      </div>
      <div className="container-info flex flex-col gap-4 absolute mt-[4%] p-40">
        <h1>{movie.title}</h1>
        <span>{movie.release_date}</span>
        <span className="text-gray-400">{movie.tagline}</span>
        <p>{movie.overview}</p>
        <div className="buttons">
          <Buttons firstBtn="⏵ Play" SecondBtn="ⓘ Ver información" />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
