import { CiSearch } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const ButtonsNavigation = () => {
  return (
    <ul className="navegacion navegacion--derecha">
      <li>
        <Link to="/search-movies">
          <CiSearch className="size-8" />
        </Link>
      </li>
      <li>
        <Link to="/">
          <MdFavoriteBorder className="size-8" />
        </Link>
      </li>
    </ul>
  );
};

export default ButtonsNavigation;
