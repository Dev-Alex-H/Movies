const API = "https://api.themoviedb.org/3";
const api_key = "api_key=79272c5618c09e303d8611a7339532ca";
export default function get(path) {
    return fetch(API + path + api_key)
        .then(result => result.json());
}

// https://api.themoviedb.org/3/movie/634649?api_key=79272c5618c09e303d8611a7339532ca