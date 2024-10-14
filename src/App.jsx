import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "./App.css";
import { Footer, Header, ProblemHeader } from "./components-self";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { login } from "./store/authSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        dispatch(login({ userData: parsedData }));
        navigate("/");
      } catch (error) {
        console.error("Failed to parse userData:", error);
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

  // Determine if we are on /problem/:pid route
  const isProblemPage = location.pathname.startsWith("/problem/");

  return (
    <div className="min-h-screen flex flex-wrap content-between">
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
      <div className="w-full block">
        {isProblemPage ? <ProblemHeader /> : <Header />}{" "}
        {/* Conditionally render the header */}
        <main>
          <Outlet />
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
