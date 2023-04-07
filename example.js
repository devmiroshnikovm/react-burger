const MouseSpy = () => {
  const [mousePosition, setMousePosition] = useState([]);

  useEffect(() => {
    // Устанавливаем слушатель события при монтировании
    document.addEventListener("mousemove", trackMousePos);

    // Сбрасываем слушатель события при удалении компонента из DOM
    return () => {
      document.removeEventListener("mousemove", trackMousePos);
    };
  }, []);

  const trackMousePos = (e) => {
    setMousePosition([e.clientX, e.clientY]);
  };
};

useEffect(() => {
  // Код эффекта

  // Код сброса
  return () => {
    // отписка от событий, закрытие соединений
  };
}, []);
