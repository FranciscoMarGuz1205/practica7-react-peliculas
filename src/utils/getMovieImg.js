export function getMovieImg(path) {
  return path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : null;
}