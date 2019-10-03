import React, { useState } from "react";
import DishForm from './DishForm';

const Toggle = () => {
    const [isToggled, setToggle] = useState(false);
    return (
        <div>
            <button onClick={(e) => setToggle(!isToggled)}>Toggle</button>
            {isToggled && <DishForm></DishForm>}
        </div>
    );
};

export default Toggle;