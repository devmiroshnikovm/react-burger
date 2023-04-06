import { BurgerIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { MenuIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./styles.module.css";
import ButtonConstructor from "../ButtonConstructort/ButtonConstructort";

function AppHeader() {
  return (
    <header className={styles.box}>
      <div className={styles.burgerMenuWrapper}>
        <ButtonConstructor>
          <span className={`${styles.burgerLabelWrapper}  `}>
            <BurgerIcon type="primary" />
            <span className="text text_type_main-default ml-2 mr-5">
              Конструктор
            </span>
          </span>
        </ButtonConstructor>

        <ButtonConstructor>
          <span className={`${styles.menuLabelWrapper}  ml-2 mr-5`}>
            <MenuIcon type="primary" />
            <span className="text text_type_main-default ml-2 mr-5">
              Лента заказов
            </span>
          </span>
        </ButtonConstructor>
      </div>

      <Logo />

      <ButtonConstructor>
        {" "}
        <span className={styles.loginLabelWrapper}>
          <ProfileIcon type="primary" />
          <span className="text text_type_main-default ml-2">
            Личный кабинет
          </span>
        </span>
      </ButtonConstructor>
    </header>
  );
}

export default AppHeader;
