import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://be-up-host.onrender.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});
// Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);


export default axiosClient;
