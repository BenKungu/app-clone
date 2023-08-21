import axios from 'axios';

// const baseURL = "http://127.0.0.1:8000/api/";
const baseURL = "https://appointme.krescentadventures.com/api/"

const headers = {
    'Content-Type': 'application/json'
};

// Create axiosInstance with defined headers
const axiosInstance = axios.create({
    baseURL,
    headers,
    timeout: 30000,
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
})

// Add response interceptor to axiosInstance
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response && error.response.status === 401 || error.response.status === 429) {

            localStorage.clear();
            window.location.reload();

        }

        return Promise.reject(error);
    }
);

export { axiosInstance };
