import styles from './Search.module.css';
import { FaSearch } from 'react-icons/fa';
import { useSearchParams } from 'react-router-dom';
// import { getSearch } from '../utils/httpSearch';

export default function Search() {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search") ?? "";

    const handleSubmit = (e) => {
        e.preventDefault();
        // getSearch(search);
    };
    return (
        <form className={styles.searchContainer} onSubmit={handleSubmit}>
            <div className={styles.searchBox}>
                <input
                    className={styles.searchInput}
                    type="text"
                    value={search ?? ""}
                    autoFocus
                    placeholder='Search'
                    aria-label='Search Movies'
                    onChange={(e) => {
                        const value = e.target.value;

                        setQuery({ search: value });
                    }}
                />
                <button className={styles.searchButton} type="submit">
                    <FaSearch size={20} />
                </button>
            </div>
        </form>
    )
}