/**
 * 1st we create a reducer.
 * 2nd, create an initialState constant
 * within our component, we use useReducer passing as arguments the reducer and initial state
 * we deconstruct use reducer to get the count (or state to update) and the dispatch function in order to modify that state
 */

import React, { useReducer } from "react";

const initialState = 0;
const reducer = (count, action) => {
  switch (action) {
    case "increment":
      return count + 1;
    case "decrement":
      return count - 1;
    case "reset":
      return initialState;
    default:
      return count;
  }
};

const CounterOne = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default CounterOne;
