import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import get from '../utils/httpClient';
import styles from './MovieDetails.module.css';
import getMovieImg from '../utils/getMovieImg';
import backgroundDefault from '../images/backgroundDefault.jpg';

export default function MovieDetails() {
    const { movieId } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [movie, setMovie] = useState({});
    const background = movie.backdrop_path ? getMovieImg(movie.backdrop_path) : backgroundDefault;

    useEffect(() => {
        setIsLoading(true);
        get(`/movie/${movieId}?`)
            .then(data => {
                setMovie(data)
                setIsLoading(false);
            });
    }, [movieId]);

    if (isLoading) {
        return <Spinner />;
    }

    const imageUrl = getMovieImg(movie.poster_path);
    return (
        <div className={styles.detailsContainer}>
            <div className={styles.detailsBackground} style={{ backgroundImage: `url(${background})` }}>
            </div>
            <div className={styles.detailsInfo} >
                <img className={`${styles.col} ${styles.movieImage}`} src={imageUrl} alt={movie.title} />
                <div className={`${styles.col}`}>
                    <p className={styles.firstItem}><strong>Title:</strong> {movie.title}</p>
                    <p>
                        <strong>Genres: </strong>{movie.genres.map(el => el.name).join(', ')}
                    </p>
                    <p><strong>Description:</strong> {movie.overview}</p>
                </div>
            </div>
        </div>
    );
}