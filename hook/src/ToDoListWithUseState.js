import { useState } from "react";

function ToDoListWithUseState() {
    const [job, setJob] = useState("");
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem("jobs"))
        return storageJobs ?? []; // ?? nếu là undefined, null thì lấy => []
    });

    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]

            // save to local storage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem("jobs", jsonJobs)

            return newJobs;
        })
        setJob("") // reset input
    }

    const handleDelete = (index) => {
        setJobs(prev => {
            const newJobs = [...prev];
            newJobs.splice(index, 1);

            // save to local storage
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem("jobs", jsonJobs)

            return newJobs;
        })
    }

    return (
        <div className="App">
            <input value={job} onChange={(e) => setJob(e.target.value)} />
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {
                    jobs.map((job, index) => <li key={index}>{job} <button onClick={() => handleDelete(index)}>Delete</button></li>)
                }
            </ul>

        </div>
    );
}

export default ToDoListWithUseState;