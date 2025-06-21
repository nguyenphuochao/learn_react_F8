import React, { useReducer } from 'react'

// useReducer
// 1. Init state
// 2. Actions
// 3. Reducer
// 4. Dispatch

// init state
const initState = [];

// action
const ADD_TODO = 'add_todo';

// reducer
const reducer = (state, action) => {
    switch (action) {
        case ADD_TODO:
            return [...state, action.payload];
        default:
            throw Error('Invalid action');
    }
}


function TodoAppWithUseReducerHook() {
    const [todo, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <h3>Todo</h3>
            <input placeholder="Enter todo..." />
            <button onClick={() => dispatch(ADD_TODO)}>Add</button>

            <ul>
                <li>Todo 1</li>
                <li>Todo 2</li>
                <li>Todo 3</li>
            </ul>
        </div>
    )
}

export default TodoAppWithUseReducerHook
