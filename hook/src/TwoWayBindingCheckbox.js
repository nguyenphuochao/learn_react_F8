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

function TwoWayBindingCheckbox() {
    const [checked, setChecked] = useState([]);

    const handleCheck = (id) => {
        setChecked(prev => {
            const isChecked = checked.includes(id);
            if (isChecked) {
                return checked.filter(item => item !== id);
            } else {
                return [...prev, id];
            }
        })
    }

    const hanldeSubmit = () => {
        console.log({
            ids: checked
        });
    }

    return (
        <div>
            {
                courses.map((course) =>
                    <div key={course.id}>
                        <input type="checkbox"
                            checked={checked.includes(course.id)}
                            onChange={() => handleCheck(course.id)}
                        />
                        {course.name}
                    </div>
                )
            }
            <button onClick={hanldeSubmit}>Register</button>
        </div>
    )
}

export default TwoWayBindingCheckbox
