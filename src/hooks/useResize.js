import { useState, useEffect } from "react";

const useResize = (size) => {
  const [windowSize, setWindowSize] = useState(window.innerWidth > size);

  function updateSize() {
    setWindowSize(window.innerWidth > size);
  };

  useEffect(() => {
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  });

  return windowSize;
}

export default useResize;