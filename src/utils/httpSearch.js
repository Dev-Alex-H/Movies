const API = "https://api.themoviedb.org/3/search/movie?";
const api_key = "api_key=79272c5618c09e303d8611a7339532ca";

export function getSearch(path, page = "") {
    return fetch(`${API}${api_key}&query=${path}&page=${page}`)
        .then(result => result.json());
}