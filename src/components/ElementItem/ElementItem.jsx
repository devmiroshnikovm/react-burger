import styles from "./styles.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function ElementItem(props) {
  const { data, ...otherProps } = props;

  return (
    <div className={styles.scrollContainer}>
      <h2>Булки</h2>
      <ul className={styles.container}>
        {props.data.map((element) => {
          if (element.type === "bun") {
            return (
              <li className={styles.element} key={element._id}>
                <img
                  src={element.image}
                  alt={element.name}
                  className="pt-6"
                ></img>
                <div className={styles.priceIconWrapper}>
                  <span
                    className={`${styles.price} text text_type_main-default`}
                  >
                    {element.price}
                  </span>
                  <CurrencyIcon />
                </div>
                <p className={`${styles.label}text text_type_main-default`}>
                  {element.name}
                </p>
              </li>
            );
          }
        })}
      </ul>

      <h2>Соусы</h2>
      <ul className={styles.container}>
        {props.data.map((element) => {
          if (element.type === "sauce") {
            return (
              <li className={styles.element} key={element._id}>
                <img
                  src={element.image}
                  alt={element.name}
                  className="pt-6"
                ></img>
                <div className={styles.priceIconWrapper}>
                  <span
                    className={`${styles.price} text text_type_main-default`}
                  >
                    {element.price}
                  </span>
                  <CurrencyIcon />
                </div>
                <p className={`${styles.label}text text_type_main-default`}>
                  {element.name}
                </p>
              </li>
            );
          }
        })}
      </ul>

      <h2>Начинки</h2>
      <ul className={styles.container}>
        {props.data.map((element) => {
          if (element.type === "main") {
            return (
              <li className={styles.element} key={element._id}>
                <img
                  src={element.image}
                  alt={element.name}
                  className="pt-6"
                ></img>
                <div className={styles.priceIconWrapper}>
                  <span
                    className={`${styles.price} text text_type_main-default`}
                  >
                    {element.price}
                  </span>
                  <CurrencyIcon />
                </div>
                <p className={`${styles.label}text text_type_main-default`}>
                  {element.name}
                </p>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default ElementItem;

//все элементы в React поддерживают пропс key. Указывать это свойство нужно у первого элемента разметки внутри цикла

/* 
return (
  <ul className={styles.container}>
    {props.data.map((element) => (
      
      <li className={styles.element} key={element._id}>
        <img src={element.image} alt={element.name} className="pt-6"></img>
        <div className={styles.priceIconWrapper}>
          <span
            className={`${styles.price} text text_type_main-default`}
          >
            {element.price}
          </span>
          <CurrencyIcon />
        </div>
        <p
          className={`${styles.label}text text_type_main-default`}
        >
          {element.name}
        </p>
      </li>
    ))}
  </ul>
); */
