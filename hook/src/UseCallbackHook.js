import React, { useCallback, useState } from 'react'
import Content from './Content';

function UseCallbackHook() {
    const [count, setCount] = useState(1);

    const handleIncrese = useCallback(() => {
        setCount(prev => prev + 1);
    }, [])

    return (
        <div>
            <Content onIncrese={handleIncrese} />
            <h1>{count}</h1>
        </div>
    )
}

export default UseCallbackHook
