const API = "https://api.themoviedb.org/3";
const api_key = "api_key=79272c5618c09e303d8611a7339532ca";

export function getSearch(path) {
    fetch(`${API}/search/movie?${api_key}&query=${path}`)
        .then(result => result.json());
}