import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://fakestoreapi.com",
});

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("interseptor", response);
    return response;
  },
  (error) => {
    console.log(response);
  },
);
