import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SearchMovies from "./components/SearchMovies";
import MovieDetails from "./components/MovieDetails";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/search-movies" element={<SearchMovies />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
