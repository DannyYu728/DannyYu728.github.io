import "./App.scss";
import Nav from "./Components/Nav/Nav.jsx";
import Home from "./Screens/Home/Home";
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<h1>About</h1>}></Route>
        <Route path="/projects" element={<h1>Projects</h1>}></Route>
        <Route path="/contact" element={<h1>Contact</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
