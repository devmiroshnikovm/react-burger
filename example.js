const MouseSpy = () => {
  const [mousePosition, setMousePosition] = useState([]);

  useEffect(() => {
    // Устанавливаем слушатель события при монтировании
    document.addEventListener("mousemove", trackMousePos);

    // Сбрасываем слушатель события при удалении компонента из DOM
    return () => {
      document.removeEventListener("mousemove", trackMousePos);
    };
  }, []);

  const trackMousePos = (e) => {
    setMousePosition([e.clientX, e.clientY]);
  };
};

useEffect(() => {
  // Код эффекта

  // Код сброса
  return () => {
    // отписка от событий, закрытие соединений
  };
}, []);







import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.css';
import ModalOverlay from './ModalOverlay';
import CloseIcon from './CloseIcon';

const modalRoot = document.getElementById('modal-root');

function Modal(props) {
  const { header, onClose } = props;

  const [domReady, setDomReady] = useState(false);

  function handleCloseButtonClick(e) {
    console.log(e.target);
    if (onClose) {
      onClose(); // Call the onClose callback when the CloseIcon is clicked
    }
  }

  useEffect(() => {
    setDomReady(true);
    console.log("Mounted");

    return () => {
    };
  }, []);

  return domReady
    ? createPortal(
        <>
          <div className={styles.popupContainer}>
            <div className={styles.headerCloseWrapper}>
              <p className="text text_type_main-large">{header}</p>
              <CloseIcon onClick={handleCloseButtonClick} />
            </div>
            <div>{props.children}</div>
          </div>

          <ModalOverlay />
        </>,
        modalRoot
      )
    : null;
}

export default Modal;




import React, { useState } from 'react';
import Modal from './Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div className="App">
      {isModalOpen && (
        <Modal header={"test"} onClose={handleCloseModal}>
          {/* ... */}
        </Modal>
      )}
    </div>
  );
}

export default App;