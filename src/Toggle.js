import React, { useState, useContext } from "react";
import { UserContext } from './App';

const Toggle = () => {
    const [isToggled, setToggle] = useState(false);
    const userInfo = useContext(UserContext);
    console.log('userInfo: ', userInfo);

    if(!userInfo.user) return null;
    return (
        <div>
            <button onClick={(e) => setToggle(!isToggled)}>Toggle</button>
            {isToggled && <h2>Hello</h2>}
        </div>
    );
};

export default Toggle;