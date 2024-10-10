import axios from "axios";
import { useEffect } from "react";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", 
  withCredentials: true, 
});

axiosInstance.interceptors.response.use(
  response => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const { data } = await axiosInstance.post("/api/auth/refresh", {}, { withCredentials: true });
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${data.accessToken}`;
        console.log("Yeni accessToken: ", data.accessToken);
        return axiosInstance(originalRequest); 
      } catch (refreshError) {
        console.error("Token yenileme hatası: ", refreshError);
        return Promise.reject(refreshError); 
      }
    }

    return Promise.reject(error);
  }
);

export const useAxiosInstance = () => {
    useEffect(() => {
        const token = document.cookie.split('; ').find(row => row.startsWith('accessToken='));
      
        if (token) {
          const accessToken = token.split('=')[1];
          axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
          console.log("Access token bulundu: ", accessToken);
        } else {
          console.log("Access token bulunamadı.");
        }
      }, []);

  return axiosInstance;
};

export default axiosInstance;
