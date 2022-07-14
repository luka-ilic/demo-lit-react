import { useRef, useEffect } from "react";
import "../litComponents/simple-input";

export const VanillaInput = ({ placeholder, onChange, value }) => {
  const inputRef = useRef();

  useEffect(() => {
    let input = null;

    if (inputRef.current) {
      inputRef.current.addEventListener("input-change", onChange);
      input = inputRef.current;
    }

    return () => {
      if (input) {
        input.removeEventListener("input-change", onChange);
      }
    };
  });

  return (
    <simple-input
      ref={inputRef}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    ></simple-input>
  );
};
