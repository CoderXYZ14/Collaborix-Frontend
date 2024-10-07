import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components-self";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { login } from "./store/authSlice";

function App() {
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
