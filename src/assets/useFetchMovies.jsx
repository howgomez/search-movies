import { useEffect, useState, useRef } from "react";

const useFetchMovies = (value) => {
  const [data, setData] = useState(null); // Estado para almacenar los datos
  const cache = useRef({}); // Usar useRef para crear un caché que persista entre renders

  useEffect(() => {
    if (!value) {
      setData(null);
      return;
    }

    if (cache.current[value]) {
      setData(cache.current[value]); // Usar el caché si está disponible
    } else {
      const getFetch = async () => {
        const options = {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZmZlZmZiZjdiZTMxODJhZDBmMTkxYzNmN2VkZWEyMiIsInN1YiI6IjY2NTdjZWI0MTBjYmMwMGE1OWE1MzZiMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7RSfSYQ5tZXBR2emACda0urN7l5V3-IZWOoGtdJQEE8",
          },
        };

        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&page=1`,
          options
        );
        const data = await response.json();
        cache.current[value] = data; // Guardar los datos en el caché
        setData(data);
      };

      getFetch();
    }
  }, [value]);

  return data; // Retornar los datos
};

export default useFetchMovies;

