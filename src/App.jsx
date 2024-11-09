import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { Header } from "./components-self";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./store/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        navigate("/");
      } catch (error) {
        toast.error("Failed to parse userData:", {
          position: "top-center",
          autoClose: 3000,
        });
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
    <div className="flex flex-col h-screen">
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
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
