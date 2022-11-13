import "./Contact.scss";

function Contact() {
  return (
    <div className="contact">
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
