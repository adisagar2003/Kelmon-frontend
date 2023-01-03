import React, { useState } from "react";
import "./Blog.css";
import Modal from "./Modal";
function Blog(props) {
  const [openModal, setIsOpen] = useState(false);

  return (
    <div className="Blog__layout">
      {openModal && (
        <Modal
          onClose={() => {
            setIsOpen(false);
          }}
          sillyFunction={() => console.log(openModal)}
          data={props}
          isModalOpened={openModal}
        />
      )}
      <div className="Blog__user">
        <div className="Blog__profile">
          <img src={props.profileImage} />
        </div>

        <div className="Blog__userName">{props.user_name}</div>
      </div>
      <div className="Blog__content">{props.content}</div>
      <button className="Blog__button" onClick={() => setIsOpen(true)}>
        Open
      </button>
    </div>
  );
}

export default Blog;
