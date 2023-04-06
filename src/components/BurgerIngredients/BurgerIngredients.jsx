import styles from "./styles.module.css";
import MenuItems from "../MenuItems/MenuItems";
import ProductContainer from "../ProductContainer/ProductContainer";

function BurgerIngredients(props) {
  const { success, ...otherProps } = props;

  return (
    <div className={styles.box}>
      <p>Соберите бургер</p>
      <MenuItems {...otherProps} />
      <ProductContainer {...otherProps} />
    </div>
  );
}

export default BurgerIngredients;
