import MovieGrid from "../components/MovieGrid";

function LandingPage() {
  return (
    <main>
      <h2>Catálogo de películas</h2>
      <p>Selecciona una película para consultar sus detalles.</p>

      <MovieGrid />
    </main>
  );
}

export default LandingPage;