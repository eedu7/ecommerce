import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://127.0.0.1:8050",
    headers: {
        "Content-Type": "application/json",
    },
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API error", error);
        return Promise.reject(error);
    }
);

export default apiClient;
