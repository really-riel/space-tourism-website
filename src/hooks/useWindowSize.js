import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handlerResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handlerResize();
    window.addEventListener("resize", handlerResize);

    return () => window.removeEventListener("resize", handlerResize);
  }, []);

  return windowSize;
};

export default useWindowSize;
