const API = "https://api.themoviedb.org/3";
const api_key = "api_key=79272c5618c09e303d8611a7339532ca";
export default function get(path, page = "") {
    return fetch(API + path + api_key + page)
        .then(result => result.json());
}