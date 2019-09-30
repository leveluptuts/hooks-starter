import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            return {
                count: state.count + action.value
            }
        case 'minus':
            return {
                count: state.count - 1
            }
        case 'reset':
            return {
                count: initialState.count
            }
        default:
            throw new Error();
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>{state.count}</h3>
            <button onClick={() => dispatch({type: 'add', value: 10})}>+</button>
            <button onClick={() => dispatch({type: 'minus'})}>-</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
}

export default Counter;