import React, { useRef, useState } from 'react'


function UseRefHook() {
    const [count, setCount] = useState(60);

    const timeId = useRef();

    const handleStart = () => {
        timeId.current = setInterval(() => {
            setCount(prevState => prevState - 1);
        }, 1000)
    }

    const handleStop = () => {
        clearInterval(timeId.current)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default UseRefHook
