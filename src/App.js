import "./App.scss";
import Nav from "./Components/Nav/Nav.jsx";
import Home from "./Screens/Home/Home";
import About from "./Screens/About/About.jsx";
import Contact from "./Screens/Contact/Contact";
import Slider from "./Screens/Projects/Slider";
import Info from "./Components/Info/Info"
import { Routes, Route } from "react-router-dom";
import slideData from './Assets/Slides.js'

function App() {

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Slider slides={slideData}/>}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/info" element={<Info />}></Route>
      </Routes>
    </div>
  );
}

export default App;
