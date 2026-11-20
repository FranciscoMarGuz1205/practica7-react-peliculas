import { useEffect, useState } from "react";
import { get } from "../services/httpClient";
import MovieCard from "./MovieCard";

function MovieGrid() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadMovies() {
      try {
        const data = await get(
          "/discover/movie?include_adult=false",
          controller.signal
        );

        if (!controller.signal.aborted) {
          setMovies(data.results ?? []);
        }
      } catch (error) {
        if (!controller.signal.aborted) {
          setError(error.message);
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadMovies();

    return () => controller.abort();
  }, []);

  if (loading) {
    return <p role="status">Cargando películas...</p>;
  }

  if (error) {
    return <p role="alert">Error: {error}</p>;
  }

  if (movies.length === 0) {
    return <p>No se encontraron películas.</p>;
  }

  return (
    <ul className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}

export default MovieGrid;