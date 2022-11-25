import "./Footer.scss";
import Logo from "../../Assets/GitHub-Mark-Light-64px.png";
import Linkedin from "../../Assets/LI-In-Bug.png";
import Resume from "../../Assets/resume.png";
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer>
      <a href="https://github.com/DannyYu728" target="_blank">
        <img src={Logo} alt="Github" className="git" />
      </a>
      <a href="https://www.linkedin.com/in/dannyyu728/" target="_blank">
        <img src={Linkedin} alt="Linkedin" className="linkedin" />
      </a>
      <a href="../../Assets/Resume.pdf" target="_blank" type="application/octet-stream" download="Danny.pdf">
        <img src={Resume} alt="Resume" className="linkedin" />
      </a>
    </footer>
  );
}

export default Footer;
