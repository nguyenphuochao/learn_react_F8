import React, { useState } from 'react'

// API
const courses = [
    {
        id: 1,
        name: "Nguyen Van A"
    },
    {
        id: 2,
        name: "Nguyen Van B"
    },
    {
        id: 3,
        name: "Nguyen Van C"
    }
];

function TwoWayBindingRadio() {
    const [checked, setChecked] = useState(1);

    const hanldeSubmit = () => {
        console.log({
            id: checked
        });
    }

    return (
        <div>
            {
                courses.map((course) =>
                    <div key={course.id}>
                        <input type="radio"
                            onChange={() => setChecked(course.id)}
                            checked={checked === course.id}
                        />
                        {course.name}
                    </div>
                )
            }
            <button onClick={hanldeSubmit}>Register</button>
        </div>
    )
}

export default TwoWayBindingRadio
