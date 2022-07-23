import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import getMovieImg from '../../utils/getMovieImg';
import styles from './MovieCard.module.css';
import Ratings from '../Ratings/Ratings';

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
                <div className={styles.movieTitle}>
                    <div className={styles.contTitleDate}>
                        <p className={styles.title}>{movie.title}</p>
                        <p className={styles.movieDate}>{movie.release_date}</p>
                    </div>
                    <Ratings className={styles.ratingCont} rating={movie.vote_average} />
                </div>
            </Link>
        </motion.div>
    );
}