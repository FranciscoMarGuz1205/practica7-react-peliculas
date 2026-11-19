import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <main>
      <h2>Catálogo de películas</h2>
      <p>Aquí aparecerán las películas de la API.</p>

      <Link to="/movies/550">Ver detalle de prueba</Link>
    </main>
  );
}

export default LandingPage;