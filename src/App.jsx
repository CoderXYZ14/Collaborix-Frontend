import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components-self";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("userData");

    if (userData) {
      const parsedData = JSON.parse(userData);
      dispatch(login({ userData: parsedData }));
      navigate("/");
    }
  }, [dispatch, navigate]);

  return (
    <div className="min-h-screen flex flex-wrap content-between">
      <div className="w-full block">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
