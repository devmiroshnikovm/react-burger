import AppHeader from "./components/AppHeader/AppHeader";
import BurgerIngredients from "./components/BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "./components/BurgerConstructor/BurgerConstructor";
import stylesApp from "./stylesApp.module.css";
import { useEffect, useState } from "react";

import imageDone from "./images/done.svg";
import Modal from "./components/Modal/Modal";
import ErrorMock from "./components/ErrorMock/ErrorMock";
import Loading from "./components/Loading/Loading";

import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

function App() {
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // test
  const [isOpen, setIsPopupOpen] = useState(false);

  function handleOpenModalOrderDetails() {
    console.log("setIsPopupOpen");
    setIsPopupOpen(true);
  }

  function handleCloseModal() {
    setIsPopupOpen(false);
  }

  //test

  useEffect(() => {
    // Код эффекта

    console.log("start fetch");

    const config = {
      baseUrl: "https://norma.nomoreparties.space/api/ingredients",
      headers: {
        "Content-Type": "application/json",
      },
    };
    async function checkResponse(result) {
      if (result.ok) {
        return await result.json();
      } else {
        throw new Error(`Ошибка: ${result.status}`);
      }
    }

    async function getRequest() {
      const result = await fetch(config.baseUrl, {
        method: "GET",
        headers: config.headers,
      });
      return await checkResponse(result);
    }

    const getState = async () => {
      try {
        const result = await getRequest();
        console.log(result);

        setTimeout(() => {
          setData(result.data);
          setLoading(false);
        }, 2000);
      } catch (err) {
        setError(err);
      }
    };

    getState();

    // Код сброса
    return () => {
      // отписка от событий, закрытие соединений
    };
  }, []);

  const element = data[0];

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {/* отрисовываем главуню страницу */}
          <div className={stylesApp.topBox}>
            <AppHeader />
            <main className={stylesApp.box}>
              <BurgerIngredients elements={data} />
              <BurgerConstructor
                elements={data}
                handleOpenModalOrderDetails={handleOpenModalOrderDetails}
              />
            </main>
          </div>

          {/* отрисовываем модальное окно детали заказа */}

          <Modal
            header={"test"}
            handleCloseModal={handleCloseModal}
            isOpen={isOpen}
          >
            <div className={stylesApp.modalContaner}>
              <p className="text text_type_digits-large pt-30">034536</p>
              <p className="text text text_type_main-default mb-8">
                идентификатор заказа
              </p>
              <img src={imageDone} />
              <p className="text text text_type_main-default mt-15">
                Ваш заказ начали готовить
              </p>

              <p className="text text text_type_main-default mt-2 pb-30">
                Дождитесь готовности на орбитальной станции
              </p>
            </div>
          </Modal>
        </>
      )}
      {/* 
      {isModalOpen && (
        <Modal header={"test"} handleCloseModal={handleCloseModal}>
          <div className={stylesApp.modalContaner}>
            <p className="text text_type_digits-large pt-30">034536</p>
            <p className="text text text_type_main-default mb-8">
              идентификатор заказа
            </p>
            <img src={imageDone} />
            <p className="text text text_type_main-default mt-15">
              Ваш заказ начали готовить
            </p>

            <p className="text text text_type_main-default mt-2 pb-30">
              Дождитесь готовности на орбитальной станции
            </p>
          </div>
        </Modal>
      )} */}

      {/*       <Modal header={"test"}>
        <div className={stylesApp.modalContaner}>
          <p className="text text_type_digits-large pt-30">034536</p>
          <p className="text text text_type_main-default mb-8">
            идентификатор заказа
          </p>
          <img src={imageDone} />
          <p className="text text text_type_main-default mt-15">
            Ваш заказ начали готовить
          </p>

          <p className="text text text_type_main-default mt-2 pb-30">
            Дождитесь готовности на орбитальной станции
          </p>
        </div>
      </Modal> */}

      {/* <Modal header={"Детали ингредиента"}>
        <div className={stylesApp.modalContaner}>
          <img src={element.image_large} alt={element.name} className=""></img>
          <p className="text text text_type_main-default mb-4">
            {element.name}
          </p>
          <div
            className={stylesApp.modalIngredientsDetailsWrapper + " mt-8 mb-15"}
          >
            <div className={stylesApp.mIProductDesriptionWrapper + " mr-5"}>
              <p className="text text text_type_main-default">Калории,ккал</p>
              <p className="text text text_type_main-default">
                {element.calories}
              </p>
            </div>

            <div className={stylesApp.mIProductDesriptionWrapper + " mr-5"}>
              <p className="text text text_type_main-default">Белки, г</p>
              <p className="text text text_type_main-default">
                {element.proteins}
              </p>
            </div>

            <div className={stylesApp.mIProductDesriptionWrapper + " mr-5"}>
              <p className="text text text_type_main-default">Жиры, г</p>
              <p className="text text text_type_main-default">{element.fat}</p>
            </div>

            <div className={stylesApp.mIProductDesriptionWrapper}>
              <p className="text text text_type_main-default">Углеводы, г</p>
              <p className="text text text_type_main-default">
                {element.carbohydrates}
              </p>
            </div>
          </div>
        </div>
      </Modal> */}
    </>
  );
}

export default App;
