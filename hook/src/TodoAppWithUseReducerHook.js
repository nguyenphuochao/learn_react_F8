import React, { useReducer, useRef } from 'react'

// useReducer
// 1. Init state
// 2. Actions
// 3. Reducer
// 4. Dispatch

// init state
const initState = {
    job: '',
    jobs: []
};

// action
const SET_JOB = 'set_job';
const ADD_JOB = 'add_job';
const DELETE_JOB = 'delete_job';

const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

const addJob = payload => {
    return {
        type: ADD_JOB,
        payload
    }
}

const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload
    }
}

// reducer
const reducer = (state, action) => {
    let newState;

    switch (action.type) {
        case SET_JOB:
            newState = {
                ...state,
                job: action.payload
            }
            break;
        case ADD_JOB:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break;
        case DELETE_JOB:
            const newJobs = [...state.jobs];
            newJobs.splice(action.payload, 1);

            newState = {
                ...state,
                jobs: newJobs
            }
            break;
        default:
            throw Error('Invalid action');
    }

    return newState;
}

// dispatch
function TodoAppWithUseReducerHook() {
    const [state, dispatch] = useReducer(reducer, initState);

    const { job, jobs } = state; // destructuring object

    const inputRef = useRef();

    const handleSubmit = () => {
        dispatch(addJob(job));
        dispatch(setJob(''));
        inputRef.current.focus(); // focus input
    }

    const handleDelete = (index) => {
        dispatch(deleteJob(index));
    }

    return (
        <div>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder="Enter todo..."
                onChange={e => dispatch(setJob(e.target.value))}
            />

            <button onClick={handleSubmit}>Add</button>

            <ul>
                {
                    jobs.map((job, index) =>
                        <li key={index}>{job}
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </li>

                    )
                }
            </ul>
        </div>
    )
}

export default TodoAppWithUseReducerHook
