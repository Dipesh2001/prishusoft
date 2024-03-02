import axios from "axios";
import Cookies from "js-cookie";

const mainAxios = axios.create({
  baseURL: "http://122.170.12.63:90/",
});

export const addToken = (userData) => {
  mainAxios.interceptors.request.use(
    function (config) {
      const authToken = Cookies.get("authToken");

      config.headers["Authorization"] = `Bearer ${userData}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

export const removeToken = () => {
  mainAxios.interceptors.request.use(
    function (config) {
      // Remove the Authorization header
      delete config.headers["Authorization"];
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
};

export { mainAxios };
