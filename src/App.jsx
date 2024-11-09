import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { Header } from "./components-self";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./store/authSlice";
import { ToastContainer } from "react-toastify";
import { showErrorToast } from "./utils/toast/toastNotifications";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        dispatch(login({ userData: parsedData }));
        // navigate("/");
      } catch (error) {
        showErrorToast("Failed to parse userData");
        console.error("Failed to parse userData");
      }
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-violet-200 from-10% to-purple-100 dark:from-slate-800 dark:to-purple-800 transition-colors duration-200">
      <Header />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={darkMode ? "dark" : "light"}
      />
      <Outlet />
    </div>
  );
}

export default App;
