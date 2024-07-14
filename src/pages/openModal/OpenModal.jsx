import { useState } from "react";
import "./open-modal.css";
import { IoClose } from "react-icons/io5";

const OpenModal = () => {
  const [modal, setModal] = useState(false);

  return (
    <div id="open-modal">
      {!modal && (
        <button
          onClick={() => {
            setModal(true);
          }}
        >
          Open Modal
        </button>
      )}

      {modal && (
        <div className="modal">
          <header>
            <p>&nbsp;</p>
            <h2>Header</h2>
            <IoClose
              onClick={() => {
                setModal(false);
              }}
            />
          </header>
          <p className="modal-content">Content</p>
          <h3>Footer</h3>
        </div>
      )}
    </div>
  );
};

export default OpenModal;
