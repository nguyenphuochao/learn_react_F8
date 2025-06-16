// import { useState } from "react";

import { useEffect } from "react";

function App() {

    useEffect(() => {
        console.log('useEffect');
    })

    return (
        <div className="App">
            {console.log('app')}
        </div>
    );
}

export default App;
