import React from 'react'
import './UI/TaskList.css'

const TaskItem = ({task}) => {
  return (
    <div className='TaskList'>
        <div>
            <h1>{task.title}</h1>
            <p>{task.body}</p>
        </div>
        <input type='checkbox'></input>
        <button className='Button'>Delete</button>
    </div>
  )
}

export default TaskItem