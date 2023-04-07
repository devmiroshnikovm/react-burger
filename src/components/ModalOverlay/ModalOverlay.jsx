import styles from "./styles.module.css";
import ModalHeader from "../ModalHeader/ModalHeader";

function ModalOverlay(props) {
  const { header, onClose } = props;

  return <div className={styles.backdrop} onClick={props.onClose}></div>;
}

export default ModalOverlay;
