import React, { useEffect } from "react";
import Navbar from "../common/Navbar";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";

const Layout = ({ handleLogout }) => {
  return (
    <div>
      <Navbar handleLogout={handleLogout} />
      <Outlet />
    </div>
  );
};

export default Layout;
