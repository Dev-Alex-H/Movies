const API = process.env.REACT_APP_API;
const api_key = process.env.REACT_APP_API_KEY;
export default function get(path, page = "") {
    return fetch(API + path + api_key + page)
        .then(result => result.json());
}