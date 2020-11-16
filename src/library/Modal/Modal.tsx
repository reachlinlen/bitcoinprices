import React from 'react';

import './Modal.css';

type handleFunc = () => void;
interface ModalProps {
  handleChange: handleFunc,
  children: React.ReactNode
}

function Modal({ handleChange, children }: ModalProps) {

  const modal = document.getElementById("myModal") as HTMLFormElement;

  React.useEffect(() => {
    const modal = document.getElementById("myModal") as HTMLFormElement;
    modal.style.display = "block"
  })

  const handleClick = () => {
    const modal = document.getElementById("myModal") as HTMLFormElement;
    modal.style.display = "none";
    handleChange;
  }

  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span id="close" className="close" onClick={handleClick}>&times;</span>
          {
            children
          }
        </div>
      </div>
    </>
  )
}

export default Modal;