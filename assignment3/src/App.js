import React from "react";
import Navigation from "./components/Navigation";
import Thumbnail from "./pages/Thumbnail";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Awards from "./pages/Awards";
import Interest from "./pages/Interest"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Thumbnail />
      <About />
      <Experience />
      <Awards />
      <Interest />
      <Footer />
    </div>
  );
}

export default App;
