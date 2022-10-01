import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Thumbnail from "./pages/Thumbnail";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Beropini from "./pages/Beropini";
import Turning20 from "./pages/Turning20";
import MakingDecision from "./pages/MakingDecision";
import SettingBondaries from "./pages/SettingBoundaries";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Thumbnail />
      <About />
      <Experience />
      <Beropini />
      <Routes>
        <Route path="/turning20" element={<Turning20 />} />
        <Route path="/making-decision" element={<MakingDecision />} />
        <Route path="/setting-boundaries" element={<SettingBondaries />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
