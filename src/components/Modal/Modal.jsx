import styles from "./styles.module.css";
import ModalOverlay from "../ModalOverlay/ModalOverlay";
import ModalHeader from "../ModalHeader/ModalHeader";

import { createPortal } from "react-dom";
import { useState } from "react";
import { useEffect } from "react";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("react-modals");

const plug = {
  title: "test",
};

function Modal(props) {
  const { header, onClose } = props;

  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    // Код эффекта
    setDomReady(true);
    console.log("Mounted");
    // Код сброса
    return () => {
      // отписка от событий, закрытие соединений
    };
  }, []);

  return domReady
    ? createPortal(
        <>
          <div className={styles.popupContainer}>
            <div className={styles.headerCloseWrapper}>
              <p className="text text_type_main-large">{header}</p>
              <CloseIcon />
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

{
  /* <div className={`${styles.headerCloseWrapper} pl-10 pt-10 pr-10`}>
<ModalHeader header={header} />
<button>close</button>
</div> 

   <div>{props.children}</div>
   */
}

{
  /* <ModalHeader onClose={onClose} header={header} />
<button className={styles.close}></button> */
}

{
  /* <div className={styles.popupContainer}>
<ModalHeader onClose={onClose} header={header} />
<button className={styles.close}></button>

<div className={styles.editContent}>test</div>
</div> */
}

{
  /* <ModalOverlay>
<div>test</div>
</ModalOverlay>
<Backdrop /> */
}

/* example 
function LifecycleFunction() {
  React.useEffect(() => {
    console.log('Mounted');
    return () => {
      console.log('Will unmount');
    };
  }, []); // Empty array means to only run once on mount.
  return (
    <div>Lifecycle Function</div>
  );
} */
