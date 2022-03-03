import styles from './App.module.css';

import {
    Routes,
    Route,
    Link,
    BrowserRouter,
} from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <header>
                    <Link to="/"><h1 className={styles.title}>Movies</h1></Link>
                </header>
                <main>
                    <Routes>
                        <Route path="/movies/:movieId" element={<MovieDetails />} />
                        <Route path="/" element={<LandingPage />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}