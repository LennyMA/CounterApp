import { useCounter } from "../hooks/useCounter";

export const ContadorComponent = () => {
  const { counter, increase, decrease, reset } = useCounter(0);

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button className="btn btn-success" onClick={() => increase(1)}>+1</button>
      <button className="btn btn-danger" onClick={() => reset()}>Reset</button>
      <button className="btn btn-warning" onClick={() => decrease(1, false)}>-1</button>
    </>
  );
};
