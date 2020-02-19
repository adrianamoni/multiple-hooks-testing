/**
 * En este caso, iniciamos un interval SOLO una vez (porque pasamos un empty array como segundo parametro)
 * y en componentWillunmount limpiamos el interval. (El return dentro de la funcion que se le pasa a useEffect)
 */

import React, { useState, useEffect } from "react";

const IntervalHookCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(tick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const tick = () => {
    setCount(prevCount => prevCount + 1);
  };

  return <div>{count}</div>;
};

export default IntervalHookCounter;
