import axios from "axios";

const axiosInstance = axios.create({
  // For production (use only one baseURL at a time)
  // baseURL: 'https://hybrid.srishticampus.in/quick_click_api/',
  
  // For local development (comment out the above and uncomment below)
  baseURL: 'http://localhost:4053/quick_click_api/',
  
  headers: {
    'Content-Type': 'application/json',
  },
  // Recommended to add timeout to prevent hanging
  timeout: 5000, // 5 seconds
});

// // Add request interceptor for logging/debugging
// axiosInstance.interceptors.request.use(config => {
//   console.log('Request sent to:', config.baseURL + config.url);
//   return config;
// }, error => {
//   return Promise.reject(error);
// });

// // Add response interceptor to handle errors globally
// axiosInstance.interceptors.response.use(response => {
//   return response;
// }, error => {
//   if (error.code === 'ECONNABORTED') {
//     console.error('Request timeout');
//     // You can show user notification here
//   }
//   return Promise.reject(error);
// });

// Export the image base URL separately
// export const imageBaseUrl = 'https://hybrid.srishticampus.in/'; 
// or for local: 
  export const imageBaseUrl ='http://localhost:4053/'

export default axiosInstance;
