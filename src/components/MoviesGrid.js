import MovieCard from './MovieCard';
import styles from './MovieGrid.module.css';
import { useEffect, useState } from 'react';
import get from '../utils/httpClient';
import Spinner from './Spinner';
// import useQuery from '../hooks/useQuery';
import { getSearch } from '../utils/httpSearch';
import { useSearchParams } from 'react-router-dom';

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useSearchParams();
    const search = query.get("search" ?? "");

    useEffect(() => {
        setIsLoading(true);
        if (search) {
            getSearch(search)
                .then(data => {
                    setMovies(data.results);
                    setIsLoading(false);
                });
        } else {
            get('/discover/movie?sort_by=popularity.desc&').then(data => {
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