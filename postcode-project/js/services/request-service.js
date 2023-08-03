import RequestException from './exceptions/request-exception.js';

export async function getJson(url) {
    try {
        const response = await fetch(url);
        const jsonBody = response.json();
        return jsonBody;
    } catch(e) {
        throw new RequestException("Request error!");
    }
}