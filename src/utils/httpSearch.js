const API = process.env.REACT_APP_API;
const api_key = process.env.REACT_APP_API_KEY;

export function getSearch(path, page = 1) {
    return fetch(`${API}/search/movie?${api_key}&query=${path}&page=${page}`)
    .then(result => result.json());
}