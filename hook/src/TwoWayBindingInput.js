import React, { useState } from 'react'

function TwoWayBindingInput() {
    const [name, setName] = useState('');

    return (
        <div>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <button onClick={() => setName("Nguyen Van B")}>Change</button>
        </div>
    )
}

export default TwoWayBindingInput
