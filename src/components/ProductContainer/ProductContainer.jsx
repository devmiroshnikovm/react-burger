import ElementItem from "../ElementItem/ElementItem";
import styles from "./styles.modules.css";

function ProductContainer(props) {
  return (
    <div>
      <ElementItem {...props} />
    </div>
  );
}

export default ProductContainer;
