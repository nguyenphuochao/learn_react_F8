import React, { useEffect, useState } from 'react'

function UseEffectWithDependencies() {
    const tabs = ["posts", "comments", "albums"];
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [type])

    return (
        <div>
            {
                tabs.map((tab) => (
                    <button
                        style={type === tab ? {
                            color: "red",
                            backgroundColor: "black"
                        } : {}}
                        onClick={() => setType(tab)}
                        key={tab}>{tab}</button>
                ))
            }

            <ul>
                {
                    posts.map((post) => (
                        <li key={post.id}>{post.title || post.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseEffectWithDependencies
