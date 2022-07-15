import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Search from './Search';
import { FaFilm } from 'react-icons/fa';

export default function Header() {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.header_title}>
                <FaFilm size={40} />
                <h1 className={styles.title} >Info Movies</h1>
                <FaFilm size={40} />
            </Link>
            <Search />
        </header>
    );
}