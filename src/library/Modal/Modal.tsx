import React from 'react';

import './Modal.css';

interface ModalProps {
  handleChange: Function,
  children: React.ReactNode
}

function Modal({ handleChange, children }: ModalProps) {

  React.useEffect(() => {
    var modal = document.getElementById("myModal") as HTMLFormElement;
    modal.style.display = "block"
  })

  const handleClick = () => {
    var modal = document.getElementById("myModal") as HTMLFormElement;
    modal.style.display = "none";
    handleChange();
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