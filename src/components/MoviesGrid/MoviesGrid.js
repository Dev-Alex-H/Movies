import { useEffect, useState } from 'react';
import { getSearch } from '../../utils/httpSearch';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './MoviesGrid.module.css';
import MovieCard from '../MovieCard/MovieCard';
import get from '../../utils/httpClient';
import Spinner from '../Spinner/Spinner';
import Empty from '../Empty/Empty'; 

export default function MoviesGrid({ search }) {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        if (search) {
            console.log(search);
            getSearch(search)
                .then(data => {
                    setMovies((prevMovies) => prevMovies.concat(data.results));
                    setHasMore(data.page < data.total_pages);
                    setIsLoading(false);
                });
        } else {
            get('/discover/movie?', `&sort_by=popularity.desc&page=${page}`).then(data => {
                setMovies((prevMovies) => prevMovies.concat(data.results));
                setIsLoading(false);
            }
            )
        }
    }, [search, page]);

    if (!isLoading && movies.length === 0) {
        return <Empty />;
    }
    return (
        <InfiniteScroll
            dataLength={movies.length}
            hasMore={hasMore}
            next={() => setPage((prevPage) => prevPage + 1)}
            loader={<Spinner />}
        >
            <ul className={styles.moviesGrid}>
                {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
            </ul>
        </InfiniteScroll>
    );
}