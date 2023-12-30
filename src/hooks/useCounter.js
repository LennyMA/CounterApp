import { useState } from "react";

export const useCounter = (initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  const increase = (value = 1) => {
    setCounter(counter + value);
  };
  const decrease = (value = 1, negative) => {
    if (!negative && (counter - value) < 1) {
      setCounter(0); //esto si no queremos valores negativos
      return;
    }
    setCounter(counter - value);
  };
  const reset = () => {
    setCounter(0);
  };

  return {
    counter,
    increase,
    decrease,
    reset,
  };
};
