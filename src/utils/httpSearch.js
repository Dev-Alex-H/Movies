const API = process.env.REACT_APP_API;
const api_key = process.env.REACT_APP_API_KEY;

export function getSearch(path, page) {
    return fetch(`${API}${api_key}&query=${path}&page=${page}`)
        .then(result => result.json());
}