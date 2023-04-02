import { MenuIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import menuConstructor from "./menuConstructor.module.css";

function MenuConstructor() {
  const handleMenuClick = () => {
    console.log("test");
  };

  return (
    <span
      className={`${menuConstructor.wrapper} pl-5`}
      onClick={handleMenuClick}
    >
      <MenuIcon type="primary" />
      <span className="text text_type_main-default pl-2">Лента заказов</span>
    </span>
  );
}

export default MenuConstructor;
