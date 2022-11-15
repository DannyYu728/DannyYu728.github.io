import './Nav.scss';
import { NavLink } from "react-router-dom"

function Nav() {
  return (
    <nav>
      <div className='logoD'>DY</div>
      <div className='right'>
      <NavLink to="/">
        <div className="navLinks">Home</div>
      </NavLink>
      <NavLink to="/about">
        <div className="navLinks">About</div>
      </NavLink>
      <NavLink to="/projects">
        <div className="navLinks">Projects</div>
      </NavLink>
      <NavLink to="/contact">
        <div className="navLinks">Contact</div>
      </NavLink>
      </div>
    </nav>
  );
}

export default Nav;