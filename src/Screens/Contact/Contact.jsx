import "./Contact.scss";
import { useRef } from "react";

function Contact() {
  const emailRef = useRef()
  const msgRef = useRef()
  const handleSubmit = async (e) => {
    e.preventDefault();
    window.open(`mailto:unknownx2@gmail.com?subject=${emailRef}=${msgRef}`)
  };

  return (
    <div className="contact">
      <form className="forms" onSubmit={handleSubmit}>
        <input ref={emailRef} className="formIn" type="email" size="60" placeholder="Enter Your Email" name="email"></input>
        <textarea ref={msgRef} className="formIn" rows="15" cols="80" placeholder='Enter message...'></textarea>
        <button type="submit">SEND!</button>
      </form>
      <div class="container">
        {Array.apply(null, { length: 9 }).map((e, i) => (
          <div class="rain">
            <div class="drop"></div>
            <div class="waves">
              <div></div>
              <div></div>
            </div>
            <div class="splash"></div>
            <div class="particles">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
