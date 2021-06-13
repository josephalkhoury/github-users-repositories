import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.github.com/'
});

export function get(url) {
    return instance({
        method: 'GET',
        url,
        headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_API_TOKEN}`
        }
    })
}
