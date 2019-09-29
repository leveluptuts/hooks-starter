import { useState, useEffect } from 'react';

function useTitleInput(initialValue) {
    const [value, setValue] = useState(initialValue);
    useEffect(() => {
        document.title = value;
    });
    return [value, setValue];
}

export { useTitleInput };