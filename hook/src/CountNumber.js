import { useState } from "react";

function CountNumber() {
    const [counter, setCount] = useState(1);

    const handleIncrement = () => {
        setCount(counter + 1);
    }

    return (
        <>
            <h1>{counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
        </>
    )
}

export default CountNumber;