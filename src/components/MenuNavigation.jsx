import { Link } from "react-router-dom";

const MenuNavigation = () => {
  return (
    <ul className="navegacion navegacion--izquierda">
      <li>
        <Link to="/">Inicio</Link>
      </li>
      <li>
        <Link to="/search-movies">Peliculas</Link>
      </li>
      <li>
        <a href="#popular"> Populares</a>
      </li>
    </ul>
  );
};

export default MenuNavigation;
