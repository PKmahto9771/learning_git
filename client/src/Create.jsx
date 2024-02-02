import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {
    const [task, setTask] = useState('');
    const handleAdd = () => {
        axios.post("http://localhost:3001/add", {task: task})
        .then(result => console.log(result))
        .catch(err => console.log(err))
    }
    const handleChange = (e) => {
        setTask(e.target.value);
    };
  return (
    <div>
        <input type="text" placeholder='Add Task' value={task} onChange={handleChange} />
        <button type='button' onClick={handleAdd}>Add</button>     
    </div>
  )
}

export default Create