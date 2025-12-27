import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // set your backend base URL
  timeout: 10000,
});

// -------------------- REQUEST INTERCEPTOR --------------------
api.interceptors.request.use(
  (config) => {
    // Example: Add Auth token later if needed
    // const token = localStorage.getItem("token");
    // if (token) config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// -------------------- RESPONSE INTERCEPTOR --------------------
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle common error cases globally

    if (error.response) {
      // Server responded with an error
      console.error("API Error:", error.response.status, error.response.data);
    } else if (error.request) {
      // No response
      console.error("No response from server:", error.request);
    } else {
      // Something else
      console.error("Axios Error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
