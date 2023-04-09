import styles from "./styles.module.css";

function ModalOverlay(props) {
  const { resetAllStatesAfterClosingModal } = props;

  return (
    <div
      className={styles.backdrop}
      onClick={resetAllStatesAfterClosingModal}
    ></div>
  );
}

export default ModalOverlay;
