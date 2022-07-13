import { useRef, useEffect } from "react";
import "../litComponents/simple-input";

export const VanillaInput = ({ placeholder, onChange, value }) => {
  const redButtonRef = useRef();

  useEffect(() => {
    let redButton = null;

    if (redButtonRef.current) {
      redButtonRef.current.addEventListener("input-change", onChange);
      redButton = redButtonRef.current;
    }

    return () => {
      if (redButton) {
        redButton.removeEventListener("input-change", onChange);
      }
    };
  });

  return (
    <simple-input
      ref={redButtonRef}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></simple-input>
  );
};
