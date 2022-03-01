import styles from './MovieCard.module.css';
export default function MovieCard({ movie }) {
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    return (
        <li className={styles.movieCard}>
            <img className={styles.movieImage} src={imageUrl} alt={movie.title} />
            <div>{movie.title}</div>
        </li>
    );
}