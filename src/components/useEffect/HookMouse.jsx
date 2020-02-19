/**
 * Running useEffect only one time. Ignoring subsequent renders.
 */

import React, { useState, useEffect } from "react";

const HookMouse = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = e => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  /**
   * IF we pass an empty array as the second parameter, the useEffect will run ONLY one time
   * like componentDidMount.
   */
  useEffect(() => {
    console.log("useEffect called");
    window.addEventListener("mousemove", logMousePosition);
    /**
     * If we return a function inside the function passed to useEffect, that code wil mimic the componentWillUnmount method.
     */
    return () => {
      console.log("component will unmount");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
};

export default HookMouse;
