import ElementItem from "../ElementItem/ElementItem";
import styles from "./styles.modules.css";

function ProductContainer(props) {
  const { elements, ...otherProps } = props;

  return (
    <div>
      <ElementItem elements={elements} />
    </div>
  );
}

export default ProductContainer;
