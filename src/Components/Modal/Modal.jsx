import "./Modal.scss";
import { useLocation } from "react-router-dom";

function Modal() {
  const location = useLocation();
  return (
    <div className="modal">
      <h1 className="detail-title">{location.state.headline}</h1>
      <img src={location.state.src} className="detail-img" />
      <p className="detail-summary">{location.state.summary}</p>
      <div className="detail-icons">
        {location.state.stack.map((e, i) => {
          return <img className="btn2" src={e} key={i} />;
        })}
      </div>
      <div className="details-links">
        <a href={location.state.link} target='_blank'>Deployed</a>

        <a href={location.state.link2}>GitHub</a>
      </div>
    </div>
  );
}

export default Modal;
