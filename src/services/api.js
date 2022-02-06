import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

function createConfig(token) {
    return { headers: { Authorization: `Bearer ${token}` } };
};

function handleLogin(body) {
    const promise = axios.post(`${BASE_URL}/sign-in`, body);

    return promise
};

function handleSignUp(body) {
    const promise = axios.post(`${BASE_URL}/sign-up`, body);

    return promise
};

function getRecords(token) {
    const headers = createConfig(token);

    const promise = axios.get(`${BASE_URL}/records`, headers);

    return promise
};

function postRegistry(body, token) {
    const headers = createConfig(token);

    const promise = axios.post(`${BASE_URL}/records`, body, headers);

    return promise
};

const api = {
    handleLogin,
    handleSignUp,
    getRecords,
    postRegistry
};

export default api;