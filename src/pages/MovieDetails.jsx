import { Link, useParams } from "react-router-dom";

function MovieDetails() {
  const { movieId } = useParams();

  return (
    <main>
      <h2>Detalle de la película</h2>
      <p>Identificador de la película: {movieId}</p>

      <Link to="/">Volver al catálogo</Link>
    </main>
  );
}

export default MovieDetails;