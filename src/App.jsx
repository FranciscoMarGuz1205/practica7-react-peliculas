import AppRouter from "./routers/AppRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <header>
        <h1>Películas · Francisco Mares Guzman</h1>
      </header>

      <AppRouter />

      <Footer />
    </>
  );
}

export default App;