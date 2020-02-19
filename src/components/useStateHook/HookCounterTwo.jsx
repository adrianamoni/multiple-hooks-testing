/**
 * on this example, we access 'prevState' passing a
 * function to the StateSetter (in this case, setCount)
 */

import React, { useState } from "react";

const HookCounterTwo = () => {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      Count {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevcount => prevcount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount(prevcount => prevcount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default HookCounterTwo;
