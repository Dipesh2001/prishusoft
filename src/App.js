import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./components/UI/Layout";
import Login from "./components/pages/Login";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import OrgList from "./components/pages/OrgList";
import { useDispatch } from "react-redux";
import { resetUserData } from "./features/loginSlice";
import OrgForm from "./components/pages/OrgForm";
import { ToastContainer } from "react-toastify";
import { addToken, removeToken } from "./app/api";

const App = () => {
  const userData = Cookies.get("userData");
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(!!Cookies.get("userData"));

  const handleLogin = () => {
    const userData = Cookies.get("userData");
    userData && setIsLoggedIn(true);
  };

  const handleLogout = () => {
    Cookies.remove("userData");
    // dispatch(resetUserData());
    setIsLoggedIn(false);
  };
  useEffect(() => {
    if (userData) {
      addToken(userData);
    } else {
      removeToken();
    }
  }, [userData]);

  return (
    <div>
      <ToastContainer />
      <Router>
        <Routes>
          {isLoggedIn && (
            <Route path="/" element={<Layout handleLogout={handleLogout} />}>
              <Route path="/" index element={<OrgList />} />
              <Route path="/add-orgnization" element={<OrgForm />} />
            </Route>
          )}
          {!isLoggedIn && (
            <Route
              path="/"
              index
              element={<Login handleLogin={handleLogin} />}
            />
          )}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
