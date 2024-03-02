import Cookies from "js-cookie";
import { toast } from "react-toastify";

export const successToast = (msg) => {
  return toast.success(msg, {
    position: "top-right",
  });
};

export const errorToast = (msg) => {
  return toast.error(msg, {
    position: "top-right",
  });
};

export const setCookie = (userData) => {
  const expires = new Date();
  expires.setDate(expires.getDate() + 7);

  // Set the cookie with the user's data
  Cookies.set("userData", JSON.stringify(userData), { expires });
};

export const removeCookie = () => {
  Cookies.remove("userData");
};
