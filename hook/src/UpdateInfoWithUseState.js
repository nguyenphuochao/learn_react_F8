import { useState } from "react";

function UpdateInfoWithUseState() {
    const [info, setInfo] = useState({
        name: "HaoNP",
        age: 25,
        address: "HCM"
    });

    const handleUpdate = () => {
        setInfo(prev => ({
            ...prev,
            job: "Developer"
        }))
    }

    return (
        <div>
            <h1>{JSON.stringify(info)}</h1>
            <button onClick={handleUpdate}>Update</button>
        </div>
    )
}

export default UpdateInfoWithUseState;