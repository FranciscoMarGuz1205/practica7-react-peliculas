import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { get } from "../services/httpClient";
import { getMovieImg } from "../utils/getMovieImg";

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadMovie() {
      setLoading(true);
      setError("");
      setMovie(null);

      try {
        const data = await get(
          `/movie/${movieId}`,
          controller.signal
        );

        if (!controller.signal.aborted) {
          setMovie(data);
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

    loadMovie();

    return () => controller.abort();
  }, [movieId]);

  const imageUrl = getMovieImg(movie?.poster_path);

  return (
    <main>
      <Link className="back-link" to="/">
        ← Volver al catálogo
      </Link>

      {loading && <p role="status">Cargando película...</p>}

      {error && <p role="alert">Error: {error}</p>}

      {!loading && !error && movie && (
        <article className="movie-detail">
          {imageUrl ? (
            <img
              className="detail-poster"
              src={imageUrl}
              alt={`Póster de ${movie.title}`}
            />
          ) : (
            <div className="detail-poster poster-placeholder">
              Sin imagen disponible
            </div>
          )}

          <div className="detail-info">
            <h2>{movie.title}</h2>

            <p>
              <strong>Géneros: </strong>
              {movie.genres?.map((genre) => genre.name).join(", ") ||
                "No disponibles"}
            </p>

            <p>
              <strong>Fecha de estreno: </strong>
              {movie.release_date || "No disponible"}
            </p>

            <p>
              <strong>Duración: </strong>
              {movie.runtime
                ? `${movie.runtime} minutos`
                : "No disponible"}
            </p>

            <h3>Sinopsis</h3>
            <p>
              {movie.overview ||
                "Esta película todavía no tiene una sinopsis disponible."}
            </p>
          </div>
        </article>
      )}
    </main>
  );
}

export default MovieDetails;