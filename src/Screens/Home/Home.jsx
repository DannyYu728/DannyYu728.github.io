import "./Home.scss";
import Typewriter from "typewriter-effect";
import Footer from "../../Components/Footer/Footer"

function Home() {
  return (
    <div className="Home">
      <div className="stars">
        {Array.apply(null, { length: 50 }).map((e, i) => (
          <div className="star" key={i}></div>
        ))}
      </div>
      <div className="myName">My Name is Danny Yu</div>
      <div className="text">
        <div className="staticText">I am your friendly neighborhood,</div>
        <Typewriter
          className="typeWriter"
          options={{
            strings: ["Foodie.", "Snowboarder.", "Spiderman.", "Developer."],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
