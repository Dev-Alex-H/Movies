import { useSearchParams } from "react-router-dom";
import MoviesGrid from "../components/MoviesGrid/MoviesGrid";
import useDebounce from "../hooks/useDebounce";

export default function LandingPage() {
    const [query] = useSearchParams();
    const search = query.get("search") ?? "";

    const debouncedSearch = useDebounce(search, 300)
    return (
        <div>
            <MoviesGrid key={debouncedSearch ?? ""} search={debouncedSearch} />
        </div>
    );
}