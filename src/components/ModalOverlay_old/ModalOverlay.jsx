import styles from "./styles.module.css";

function ModalOverlay(props) {
  console.log(props);
  return (
    <div className={styles.content}>
      <div>{props.children}</div>
    </div>
  );
}

export default ModalOverlay;
