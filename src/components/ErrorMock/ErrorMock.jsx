import styles from "./styles.module.css";
function ErrorMock(props) {
  console.log(props);
  return (
    <div className={styles.box}>
      <p className="text text_type_main-large">Error</p>
    </div>
  );
}

export default ErrorMock;
