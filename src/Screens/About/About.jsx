import "./About.scss";
import panda from "../../Assets/panda.gif";

function About() {
  return (
    <div className="about">
      <div className="contents">
        <img className="panda" src={panda} loading="lazy"/>
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
      <div className="circle-box">
        {Array.apply(null, { length: 100 }).map((e, i) => (
          <div className="circle-container" key={i}>
            <div className="circle"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
