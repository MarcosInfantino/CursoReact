import { useContext } from "react";
import { CounterContext } from "../providers/CounterProvider";

export const Counter = () => {
  const { state, dispatch } = useContext(CounterContext);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => {
          console.log(dispatch({ type: "decrement" }));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
    </>
  );
};
