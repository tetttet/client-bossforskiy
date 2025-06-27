"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Loader from "../ui/Loader";

const GlobalLoader = () => {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    setShouldRender(true); // рендерим лоадер сразу

    // Показываем лоадер с небольшой задержкой (избегаем мелькания)
    const showTimeout: NodeJS.Timeout = setTimeout(() => {
      setVisible(true);
    }, 100); // если загрузка быстрее 100ms — лоадер даже не покажется

    // Прячем через 500ms
    const hideTimeout: NodeJS.Timeout = setTimeout(() => {
      setVisible(false);
      // удаляем из DOM чуть позже, чтобы успела отработать анимация
      setTimeout(() => setShouldRender(false), 200);
    }, 500);

    return () => {
      clearTimeout(showTimeout);
      clearTimeout(hideTimeout);
    };
  }, [pathname]);

  if (!shouldRender) return null;

  return (
    <div
      className={`transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <Loader />
    </div>
  );
};

export default GlobalLoader;
