import axios from 'axios';

const BASE_URL = 'https://api-projeto-mywallet.herokuapp.com';

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

function getRegistry(token) {
    const headers = createConfig(token);

    const promise = axios.get(`${BASE_URL}/records`, headers);

    return promise
};

function postRegistry(body, token) {
    const headers = createConfig(token);

    const promise = axios.post(`${BASE_URL}/records`, body, headers);

    return promise
};

function deleteRegistry(id, token) {
    const headers = createConfig(token);

    const promise = axios.delete(`${BASE_URL}/records/${id}`, headers);

    return promise
};

const api = {
    handleLogin,
    handleSignUp,
    getRegistry,
    postRegistry,
    deleteRegistry
};

export default api;