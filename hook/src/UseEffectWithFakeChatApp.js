import React, { use, useEffect, useState } from 'react'

const lessons = [
    {
        id: 1,
        name: "HTML,CSS"
    },
    {
        id: 2,
        name: "Javascript"
    },
    {
        id: 3,
        name: "ReactJS"
    }
];

function UseEffectWithFakeChatApp() {
    const [lessonId, setLessonId] = useState(1);

    useEffect(() => {

        const handleComment = ({ detail }) => {
            console.log(detail);
        }

        window.addEventListener(`lesson-${lessonId}`, handleComment);

        // clean up
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment);
        }
    }, [lessonId])


    return (
        <div>
            <ul>
                {lessons.map((lesson) => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ? "red" : "#333"
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UseEffectWithFakeChatApp
