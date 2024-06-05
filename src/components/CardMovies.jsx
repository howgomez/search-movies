import { Link } from "react-router-dom";

const CardMovies = ({ movie }) => {
  return (
    <div className="card-movie">
      <div>
        <Link to={`/movies/${movie.id}`}>
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
          <h3 className="text-pretty">{movie.title}</h3>
        </Link>
      </div>
    </div>
  );
};
export default CardMovies;
