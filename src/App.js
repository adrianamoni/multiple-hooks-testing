import React from "react";
import "./App.css";
//useState Components.
import HookCounter from "./components/useStateHook/HookCounter";
import HookCounterTwo from "./components/useStateHook/HookCounterTwo";
import HookCounterThreee from "./components/useStateHook/HookCounterThreee";
import HookCounterFour from "./components/useStateHook/HookCounterFour";
//useEffect Components
import HookCounterOne from "./components/useEffect/HookCounterOne";
import HookMouse from "./components/useEffect/HookMouse";
import MouseContainer from "./components/useEffect/MouseContainer";
import IntervalHookCounter from "./components/useEffect/IntervalHookCounter";
import DataFetching from "./components/useEffect/DataFetching";
//use Reducer
import CounterOne from "./components/useReducer/CounterOne";
import CounterTwo from "./components/useReducer/CounterTwo";
import CounterThree from "./components/useReducer/CounterThree";

function App() {
  return (
    <div className="App">
      <CounterThree />
    </div>
  );
}

export default App;
