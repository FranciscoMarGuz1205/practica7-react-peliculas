const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function get(path, signal) {
  if (!API_KEY) {
    throw new Error("Falta configurar la llave de TMDB.");
  }

  const url = new URL(`${API_BASE_URL}${path}`);
  url.searchParams.set("api_key", API_KEY);
  url.searchParams.set("language", "es-MX");

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(
      `No se pudo consultar TMDB. Código: ${response.status}`
    );
  }

  return response.json();
}