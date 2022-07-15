import {
    Routes,
    Route,
    BrowserRouter,
    Navigate,
} from "react-router-dom";
import MovieDetails from "./pages/MovieDetails";
import LandingPage from "./pages/LandingPage";
import Header from './components/Header';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <main>
                    <Routes>
                        <Route path="/movies/:movieId" element={<MovieDetails />} />
                        <Route path="/" element={<LandingPage />} />
                        <Route path='*' element={<Navigate replace to='/' />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}