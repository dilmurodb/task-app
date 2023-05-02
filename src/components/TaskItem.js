import React from 'react'
import './UI/TaskList.css'

const TaskItem = ({task, deleteTask}) => {

    const handleDelete = () => {
        const id = task.id
        deleteTask(id)
    }
  return (
    <div className='TaskList'>
        <div>
            <h1>{task.title}</h1>
            <p>{task.body}</p>
        </div>
        <input type='checkbox'></input>
        <button onClick={handleDelete} className='Button'>Delete</button>
    </div>
  )
}

export default TaskItem