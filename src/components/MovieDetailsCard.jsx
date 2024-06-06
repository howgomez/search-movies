import Buttons from "./Buttons";

const MovieDetailsCard = ({ movie, imageUrl, pageUrl }) => {
  return (
    <div>
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

export default MovieDetailsCard;
