import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import burgerConstructor from "./burgerConstructor.module.css";

function BurgerConstructor() {
  const handleBurgerClick = () => {
    console.log("test");
  };

  return (
    <span
      className={`${burgerConstructor.wrapper} pl-5`}
      onClick={handleBurgerClick}
    >
      <BurgerIcon type="primary" />
      <span className="text text_type_main-default pl-2"> Конструктор</span>
    </span>
  );
}

export default BurgerConstructor;
