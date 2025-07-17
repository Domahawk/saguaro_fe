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
    console.log(error.response.data);

    return Promise.reject(error);
})

export default apiClient;