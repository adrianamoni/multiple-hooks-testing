/**
 * Using useEffect, we are requesting React to execute
 * the function that is passed as an argument everytime the
 * component renders. useEffect runs after every render of
 * the component.
 */

import React, { useState, useEffect } from "react";

const HookCounterOne = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  //1st argument:We need to pass a function that will be executed after every render.
  //2nd argument:We need to pass an array that will contain the state you want to watch for useEffect to re-render, in this case: [count]
  useEffect(() => {
    console.log("Updating doc title");
    document.title = `You clicked ${count} times`;
  }, [count]);

  const clickHandler = () => {
    setCount(prevState => prevState + 1);
  };

  const handleNameChange = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={e => handleNameChange(e)} />
      <button onClick={clickHandler}>Clicked {count} times</button>
    </div>
  );
};

export default HookCounterOne;
