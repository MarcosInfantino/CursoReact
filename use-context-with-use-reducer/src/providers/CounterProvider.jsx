import { createContext, useEffect, useReducer } from "react";

export const CounterContext = createContext({ state: null, dispatch: null });

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

export const CounterProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {}, []);

  return (
    <CounterContext.Provider value={{ state: state, dispatch: dispatch }}>
      {props.children}
    </CounterContext.Provider>
  );
};
