const API = process.env.REACT_APP_API_SEARCH;
const api_key = process.env.REACT_APP_API_KEY;

export async function getSearch(path, page = 1) {
    const result = await fetch(`${API}${api_key}&query=${path}&page=${page}`);
    return await result.json();
}