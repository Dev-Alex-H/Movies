import MoviesGrid from "./components/MoviesGrid";
import styles from './App.module.css';

import {
    Routes,
    Route,
    Link,
} from "react-router-dom";

export default function App() {
    return (
        <div>
            <header>
                <h1 className={styles.title}>Movies</h1>
                <Link to="/">Home</Link>
                <Link to="/ejemplox">Movie</Link>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<MoviesGrid />} />
                </Routes>
            </main>
        </div>
    );
}