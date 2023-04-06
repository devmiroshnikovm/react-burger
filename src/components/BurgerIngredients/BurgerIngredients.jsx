import styles from "./styles.module.css";
import MenuItems from "../MenuItems/MenuItems";
import ProductContainer from "../ProductContainer/ProductContainer";

function BurgerIngredients(props) {
  const { success, ...otherProps } = props;

  return (
    <div className={styles.box}>
      <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
      <MenuItems {...otherProps} />
      <ProductContainer {...otherProps} />
    </div>
  );
}

export default BurgerIngredients;
