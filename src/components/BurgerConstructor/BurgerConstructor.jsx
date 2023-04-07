import styles from "./styles.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructor(props) {
  const { elements } = props;

  return (
    <div className={styles.box + " pt-25"}>
      <ul className={styles.list}>
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
      <div className={styles.bottomElementsWrapper + " mt-10"}>
        <p className="text text_type_digits-medium">610</p>
        <span className="ml-2 mr-10">
          <CurrencyIcon type="primary" />
        </span>
        <Button htmlType="button" type="primary" size="medium">
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default BurgerConstructor;
