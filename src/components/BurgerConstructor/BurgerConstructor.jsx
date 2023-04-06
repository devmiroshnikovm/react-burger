import styles from "./styles.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(props) {
  const { success, ...otherProps } = props;

  return <div className={styles.box}></div>;
}

export default BurgerConstructor;

{
  /* <ConstructorElement
type="top"
isLocked={true}
text="Краторная булка N-200i (верх)"
price={200}
thumbnail={img}
/> */
}
