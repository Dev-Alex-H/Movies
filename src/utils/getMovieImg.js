import placeholderFilm from '../images/placeholderFilm.jpg';

export default function getMovieImg(path, width = "300") {
    return path
        ? `https://image.tmdb.org/t/p/w${width}${path}` : placeholderFilm;
}