import { motion } from 'framer-motion';
import { useRef } from 'react';
import styles from './Slider.module.css';
import MovieCard from "../MovieCard/MovieCard";

export default function Slider({ movies }) {
    const width = movies.length * 265;
    const sliderContainer = useRef();

    return (
        <motion.div
            ref={sliderContainer}
            className={styles.sliderContainer}
        >
            <motion.div
                className={styles.slider}
                drag='x'
                dragConstraints={{ right: 0, left: -width }}
            >
                {movies.map(movie => {
                    return (
                        <motion.div
                            key={movie.id}
                            className={styles.item}
                        >
                            <MovieCard movie={movie} />
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}