import { Link } from "react-router-dom";
import { getMovieImg } from "../utils/getMovieImg";

function MovieCard({ movie }) {
  const imageUrl = getMovieImg(movie.poster_path);

  return (
    <li className="movie-card">
      <Link to={`/movies/${movie.id}`}>
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Póster de ${movie.title}`}
            loading="lazy"
          />
        ) : (
          <div className="poster-placeholder">
            Sin imagen disponible
          </div>
        )}

        <h3>{movie.title}</h3>
      </Link>
    </li>
  );
}

export default MovieCard;