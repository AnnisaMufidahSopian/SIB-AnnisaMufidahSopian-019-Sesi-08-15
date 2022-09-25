import './App.css';
import {Routes, Route} from "react-router-dom"
import Navigation from "./components/Navigation"
import Home from "./pages/Home"
import About from "./pages/About"
import AboutStudy from "./pages/AboutStudy"
import AboutMe from "./pages/AboutMe";
import Members from './pages/Members';
import DetailMember from './pages/DetailMember';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login'
import Test from './pages/Test';


function App() {
  return (
    <div className="container">
      <Navigation />
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path = "/about" element={<About />}>
          <Route path="about-study" element={<AboutStudy />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
        <Route path= "/members" element={<Members />}>
          <Route path=":memberName" element ={<DetailMember />} />
        </Route>
        <Route path="/test" element={
          <ProtectedRoute>
            <Test />
          </ProtectedRoute>
        }>
          <Route path="/test" element={<Test />}></Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
