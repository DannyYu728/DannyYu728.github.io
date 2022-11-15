import "./About.scss";
import NY from "../../Assets/NY2.jpg";
import panda from "../../Assets/panda.gif";

function About() {
  return (
    <div className="about">
      <div className="contents">
        <img className="panda" src={panda} />
        <p className="message">
          Former insurance underwriter turned Software Engineer, with experience
          in developing rapport, explaining terminology and highlighting the
          unique benefits between the many products the company offers. I worked
          with multiple teams within the company to deliver a complete product
          in a timely manner to satisfy everyone and most importantly the
          client. As a Software Engineer, I will use my background to find
          solutions that will benefit the company and its end-users.
        </p>
      </div>
      {Array.apply(null, { length: 100 }).map((e, i) => (
        <div class="circle-container">
          <div class="circle"></div>
        </div>
      ))}
    </div>
  );
}

export default About;
