/**
 * useReducer with complex State and action (as objects)
 */

import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (count, action) => {
  switch (action.type) {
    case "increment":
      return { ...count, firstCounter: count.firstCounter + action.value };
    case "decrement":
      return { ...count, firstCounter: count.firstCounter - action.value };
    case "incrementTwo":
      return { ...count, secondCounter: count.secondCounter + action.value };
    case "decrementTwo":
      return { ...count, secondCounter: count.secondCounter - action.value };
    case "reset":
      return initialState;
    default:
      return count;
  }
};

const CounterTwo = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count.firstCounter}</div>
      <div>Second Counter - {count.secondCounter}</div>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment 1
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement 1
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increment 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      <button onClick={() => dispatch({ type: "incrementTwo", value: 1 })}>
        Increment Counter 2
      </button>
      <button onClick={() => dispatch({ type: "decrementTwo", value: 1 })}>
        Decrement Counter 2
      </button>
    </div>
  );
};

export default CounterTwo;
