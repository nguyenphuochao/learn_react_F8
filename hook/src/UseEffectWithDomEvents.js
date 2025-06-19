import React, { useEffect, useState } from 'react'

function UseEffectWithDomEvents() {
    const tabs = ["posts", "comments", "albums"];
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState("posts");
    const [goToTop, setGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(posts => setPosts(posts))
    }, [type])

    // Gototop
    useEffect(() => {
        const handleScroll = () => {

            if (window.scrollY > 200) {
                setGoToTop(true);
            } else {
                setGoToTop(false);
            }
            // setGoToTop(window.scrollY > 200);
        }

        window.addEventListener('scroll', handleScroll);

        // clean up function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

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

            {
                goToTop && (
                    <button
                        style={{
                            position: "fixed",
                            bottom: "20px",
                            right: "20px"
                        }}
                    >Go to top</button>
                )
            }
        </div>
    )
}

export default UseEffectWithDomEvents
