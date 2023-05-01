import React from 'react'
import './UI/TaskList.css'

const TaskList = () => {
  return (
    <div className='TaskList'>
        <div>
            <h1>Task title...</h1>
            <p>Task description...</p>
        </div>
        <input type='checkbox'></input>
        <button className='Button'>Delete</button>
    </div>
  )
}

export default TaskList