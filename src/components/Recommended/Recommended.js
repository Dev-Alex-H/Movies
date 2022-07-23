import { useEffect, useState } from "react";
import get from "../../utils/httpClient";
import Slider from "../Slider/Slider";
import styles from './Recommended.module.css';

export default function Recommended(movieId) {
    const idActual = Object.values(movieId);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        get(`/movie/${idActual}/recommendations?`)
            .then(data => {
                setMovies(data.results);
            });
    }, []);

    return (
        <>
            {movies.length !== 0 ? <h2 className={styles.title}>Recomended for you</h2> : ''}
            <Slider className={styles.recommendedContainer} movies={movies} />
        </>
    )
}