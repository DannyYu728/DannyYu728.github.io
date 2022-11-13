import "./App.scss";
import Nav from "./Components/Nav/Nav.jsx";
import Home from "./Screens/Home/Home";
import About from './Screens/About/About.jsx'
import Contact from './Screens/Contact/Contact'
import Project from './Screens/Projects/Project'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Project />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
