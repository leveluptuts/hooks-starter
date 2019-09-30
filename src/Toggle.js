import React, { useState, useContext } from "react";
import { UserContext } from './App';

const Toggle = () => {
    const [isToggled, setToggle] = useState(false);
    return (
        <div>
            <button onClick={(e) => setToggle(!isToggled)}>Toggle</button>
            {isToggled && <h2>Hello</h2>}
        </div>
    );
};

export default Toggle;