import { useState } from "react";

function App() {
  // data
  // const data = ["aaa", "bbb", "ccc"];
  const storageJobs = JSON.parse(localStorage.getItem('jobs'));

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(storageJobs ?? []);
  const [feat, setFeat] = useState('Add');
  const [index, setIndex] = useState(null);

  const handleSubmit = () => {

    if (feat == 'Add') {
      setJobs(prev => {
        const newJobs = [...prev, job];

        // save to localstorage
        const jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem('jobs', jsonJobs);

        return newJobs
      });
    } else {
      setJobs(prev => {
        const newJobs = [...prev];
        newJobs[index] = job;
        // save to localstorage
        const jsonJobs = JSON.stringify(newJobs);
        localStorage.setItem('jobs', jsonJobs);

        return newJobs
      });
    }

    setJob('')
  }

  const handleDelete = (index) => {
    setJobs(prev => {
      const newJobs = [...prev];
      newJobs.splice(index, 1);

      const jsonJobs = JSON.stringify(newJobs);
      localStorage.setItem('jobs', jsonJobs);

      return newJobs
    })
  }

  const handleEdit = (index) => {
    setJob(jobs[index]);
    setFeat('Edit');
    setIndex(index);
  }

  return (
    <div className="App">
      <input value={job} onChange={e => setJob(e.target.value)} />
      <button onClick={handleSubmit}>{feat}</button>

      <ul>
        {
          jobs.map((job, index) =>
            <>
              <li onClick={() => handleEdit(index)} style={{ display: 'inline' }}>{job}</li>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <br />
            </>
          )
        }
      </ul>

    </div>
  );
}

export default App;
