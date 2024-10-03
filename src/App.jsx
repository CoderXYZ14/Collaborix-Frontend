import { Outlet } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components-self";

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
