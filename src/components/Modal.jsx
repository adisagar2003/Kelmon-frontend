import ReactDOM from "react-dom";
import "./Blog.css";
export default function Modal({ onClose, data, isModalOpened, sillyFunction }) {
  if (!isModalOpened) {
    return null;
  } else {
    const JSX_MODAL = (
      <div className="Blog__modal">
        <div className="Blog__modalCard">
          <div className="Blog__modalProfile">
            <div className="Blog__userImage">
              <img src={data.profileImage} alt="Profile" />
            </div>
            <div className="Blog__userName">{data.user_name}</div>
          </div>
          <div className="Blog__modalContent">{data.content}</div>
          <div className="Blog__closeButton">
            <button onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    );
    return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));
  }
}
