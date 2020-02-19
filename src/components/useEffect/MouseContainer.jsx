import React, { useState } from "react";
import HookMouse from "./HookMouse";

const MouseContainer = () => {
  const [display, setDisplay] = useState(true);

  const handleToggle = () => {
    setDisplay(!display);
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle display</button>
      {display && <HookMouse />}
    </div>
  );
};

export default MouseContainer;
