import { useEffect, useState } from "react";

function UseEffectWithTimerFunctions() {
    const [countdown, setCountdown] = useState(180);

    useEffect(() => {
        const timeId = setInterval(() => {
            setCountdown(prevState => prevState - 1);
        }, 1000);

        return () => clearInterval(timeId)
    }, [])

    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default UseEffectWithTimerFunctions;