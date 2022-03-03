import MovieCard from './MovieCard';
import styles from './MovieGrid.module.css';
import { useEffect, useState } from 'react';
import get from '../utils/httpClient';
import Spinner from './Spinner';
import useQuery from '../hooks/useQuery';
import { getSearch } from '../utils/httpSearch';

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const query = useQuery();
    const search = query.get("search"); //aquí está la palabra que buscamos

    useEffect(() => {
        setIsLoading(true);
        if (search) {
            getSearch(search)
                .then(data => {
                    setMovies(data.results);
                    setIsLoading(false);
                });
        } else {
            get('/discover/movie?').then(data => {
                setMovies(data.results);
                setIsLoading(false);
            }
            )
        }
    }, [search]);

    if (isLoading) {
        return <Spinner />;
    }
    return (
        <ul className={styles.moviesGrid}>
            {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </ul>
    );
}