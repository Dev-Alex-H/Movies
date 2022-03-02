import styles from './App.module.css';

import {
    Routes,
    Route,
    Link,
} from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

export default function App() {
    return (
        <div>
            <header>
                <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/movies/:movieId" element={<MovieDetails />} />
                </Routes>
            </main>
        </div>
    );
}