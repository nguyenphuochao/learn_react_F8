import React, { useLayoutEffect, useState } from 'react'

function UseLayoutEffectHook() {
    const [count, setCount] = useState(0);

    useLayoutEffect(() => {
        if (count > 3) setCount(0);
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleClick}>Button</button>
        </div>
    )
}

export default UseLayoutEffectHook
