import React, { useState } from "react";

export default () => {
  const [isToggled, setToggle] = useState(false);

  return (
    <div>
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
      {isToggled && <h2>Hello!</h2>}
    </div>
  );
};
