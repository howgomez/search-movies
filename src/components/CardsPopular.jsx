import { Link } from "react-router-dom";

const CardsPopular = ({ movie }) => {
  return (
    <div className="movies-container">
      {movie.map((item) => (
        <div key={item.title} className="card-movie">
          <Link to={`/movies/${item.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              className=" object-cover"
            />
            <h1 className="text-1xl font-semibold p-2">{item.title}</h1>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CardsPopular;

