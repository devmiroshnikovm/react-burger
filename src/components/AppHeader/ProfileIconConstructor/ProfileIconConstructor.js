import { ProfileIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import profileIconConstructor from "./profileIconConstructor.module.css";

function ProfileIconConstructor() {
  const handleProfileIconClick = () => {
    console.log("test");
  };

  return (
    <span
      className={`${profileIconConstructor.wrapper} pl-5`}
      onClick={handleProfileIconClick}
    >
      <ProfileIcon type="primary" />
      <span className="text text_type_main-default pl-2">Личный кабинет</span>
    </span>
  );
}

export default ProfileIconConstructor;
