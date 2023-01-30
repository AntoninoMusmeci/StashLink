import React from "react";

type ModalProps = {
  showModal: boolean;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  confirmButtonHandler: () => void
};

const Modal = ({ showModal, setShowModal, confirmButtonHandler, children }: ModalProps) => {
//   const confirmButtonHandler = () => {
//     console.log("confirm");
//   };

  return showModal ? (
    <div className="modal__wrapper" onClick={() => setShowModal(!showModal)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal__content">{children}</div>
        <div className="modal__content-button">
          <button onClick={() => setShowModal(false)}> Cancel </button>
          <button onClick={confirmButtonHandler}>Add</button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Modal;
