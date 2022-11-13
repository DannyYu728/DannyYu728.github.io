import "./About.scss";
import NY from "../../Assets/NY2.jpg";

function About() {
  return (
    <div className="about">
      <img className="background" src={NY} />
      {Array.apply(null, { length: 100 }).map((e, i) => (
        <div class="circle-container">
          <div class="circle"></div>
        </div>
      ))}
      <p className="message">Hello, whats up!?</p>
    </div>
  );
}

export default About;
