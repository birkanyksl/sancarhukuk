import axios from "axios";
import { RefreshToken, Logout } from "@/context/Actions";
import { useContext, useEffect } from "react";
import { Context } from "@/context/Context";

const axiosClient = axios.create();


const getNewAccessToken = async (user, dispatch) => {
  try {
    const response = await axios.post("/api/auth/refresh", {
      refreshToken: user.refreshToken,
    });
    const newAccessToken = response.data.accessToken;
    dispatch(RefreshToken(newAccessToken)); 
    return newAccessToken;
  } catch (error) {
    console.error("Yeni access token alınamadı:", error);
    dispatch(Logout()); 
    throw error;
  }
};

const setupInterceptors = (dispatch, user) => {
  axiosClient.interceptors.request.use(
    (config) => {
      if (user) {
        const accessToken = user.accessToken; 
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );


  axiosClient.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;


      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true; 

        try {
          const { user, dispatch } = useContext(Context); 
          const newToken = await getNewAccessToken(user, dispatch);
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
          return axiosClient(originalRequest);
        } catch (err) {
          console.error("Yeniden oturum açılması gerekiyor:", err);
          return Promise.reject(err);
        }
      }

      return Promise.reject(error);
    }
  );
};


export const useAxiosClient = () => {
  const { user, dispatch } = useContext(Context);

  useEffect(() => {
    if (user) {
      setupInterceptors(dispatch, user);
    }
  }, [dispatch, user]);

  return axiosClient;
};