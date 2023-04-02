import BurgerConstructor from "./BurgerConstructor/BurgerConstructor";
import MenuConstructor from "./MenuConstructor/MenuConstructor";
import ProfileIconConstructor from "./ProfileIconConstructor/ProfileIconConstructor";
import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

import appHeader from "./appHeader.module.css";

function AppHeader() {
  return (
    <header className={appHeader.box}>
      <BurgerConstructor />
      <MenuConstructor />
      <Logo />
      <ProfileIconConstructor />
    </header>
  );
}

export default AppHeader;
