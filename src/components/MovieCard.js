import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import getMovieImg from '../utils/getMovieImg';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
    const imageUrl = getMovieImg(movie.poster_path);
    return (
        <motion.div className={styles.movieCard} draggable='false'>
            <Link to={`/movies/${movie.id}`} draggable='false'>
                <img
                    draggable='false'
                    className={styles.movieImage}
                    src={imageUrl}
                    alt={movie.title}
                />
                <div>{movie.title}</div>
            </Link>
        </motion.div>
    );
}