import styles from "./styles.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(props) {
  const { success, ...otherProps } = props;
  const elements = otherProps.data;
  console.log(elements);

  return (
    <ul className={styles.box}>
      {elements.map((element) => {
        return (
          <li
            className={`${styles.dragIconConstructorElementWrapper} mb-4`}
            key={element._id}
          >
            <DragIcon />

            <ConstructorElement
              isLocked={true}
              text={element.name}
              price={element.price}
              thumbnail={element.image}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default BurgerConstructor;
