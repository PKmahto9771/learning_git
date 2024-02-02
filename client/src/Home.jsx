import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'

const Home = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
      axios.get("http://localhost:3001/get")
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
    
      return () => {
        
      }
    }, [])
    
  return (
    <div>
        <h1>To Do List</h1>
        <Create />
        {
            todos.length === 0
            ?
            <div><h2>No Record</h2></div>
            :
            todos.map(todo =>(
                <div key={todo._id}>
                     {todo.task}
                </div>
            ))
        }
    </div>
  )
}

export default Home