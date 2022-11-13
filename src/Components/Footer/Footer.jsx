import './Footer.scss';
import Logo from "../../Assets/GitHub-Mark-Light-64px.png";
import Linkedin from "../../Assets/LI-In-Bug.png";
import Resume from "../../Assets/resume.png";



function Footer() {
  return (
    <footer>
      <a href="https://github.com/DannyYu728" target="_blank">
      <img src={Logo} alt="hoobank" className="home" />
      </a>
      <a href="https://www.linkedin.com/in/dannyyu728/" target="_blank">
      <img src={Linkedin} alt="hoobank" className="linkedin" />
      </a>
      <a href="https://www.linkedin.com/in/dannyyu728/" target="_blank">
      <img src={Resume} alt="hoobank" className="linkedin" />
      </a>
    </footer>
  );
}

export default Footer;