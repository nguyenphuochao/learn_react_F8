import React from 'react'
import Content from './Content'

function ReactMemoHoc() {
    const [count, setCount] = React.useState(1);

    const handleClick = () => {
        setCount(count + 1);
    }
    return (
        <div>
            <Content count={count} />
            <h1>{count}</h1>
            <button onClick={handleClick}>Button</button>
        </div>
    )
}

export default ReactMemoHoc
