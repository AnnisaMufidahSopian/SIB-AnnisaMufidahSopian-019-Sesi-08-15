import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
