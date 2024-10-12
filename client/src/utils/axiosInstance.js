import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useContext } from "react";
import { Context } from "@/context/Context";
import { RefreshToken } from "@/context/Actions";

const refreshToken = async (user, dispatch) => {
  try {
    const response = await axios.post("/api/auth/refresh", {
      token: user.refreshToken,
      accessToken: user.accessToken,
    });

    const { accessToken } = response.data;

    dispatch(RefreshToken(accessToken));

    return response.data; 
  } catch (error) {
    console.error("Refresh token hatası:", error);
    throw new Error("Token refresh failed");
  }
};

export const useAxiosJWT = () => {
  const { user, dispatch } = useContext(Context);

  const axiosJWT = axios.create();

  axiosJWT.interceptors.request.use(async (config) => {
    const currentDate = new Date();

    const decodedToken = jwtDecode(user.accessToken);

    if (decodedToken.exp * 1000 < currentDate.getTime()) {
      try {
        const data = await refreshToken(user, dispatch);
        config.headers["authorization"] = "Bearer " + data.accessToken; 
      } catch (error) {
        console.error("Yeni access token alınamadı:", error);
      }
    } else {
      config.headers["authorization"] = "Bearer " + user.accessToken; 
    }

    return config;
  }, (error) => {
    return Promise.reject(error);
  });

  return axiosJWT;
};
