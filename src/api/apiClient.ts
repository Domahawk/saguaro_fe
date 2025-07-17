import axios from "axios";

const apiClient = axios.create({
    baseURL: 'http://localhost/api',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
    },
});

apiClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    return Promise.reject(error);
})

apiClient.interceptors.request.use(
    (config) => {
        const token:string|null = localStorage.getItem("token");

        if (token !== null && token !== undefined && token !== "") {
            config.headers['Authorization'] = 'Bearer ' + token;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default apiClient;