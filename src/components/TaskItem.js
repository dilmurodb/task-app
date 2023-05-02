import React from 'react'
// import './UI/TaskList.css'
import classes from './UI/TaskItem.module.css'

const TaskItem = ({task, deleteTask}) => {

    const handleDelete = () => {
        const id = task.id
        deleteTask(id)
    }
  return (
    <div className={classes.taskItem}>
      <div className={classes.taskBody}>
        <h1>{task.title}</h1>
        <p>{task.body}</p>
      </div>
      <div className={classes.taskBtn}>
        <input type='checkbox'></input>
        <button onClick={handleDelete} className='Button'>Delete</button>
      </div>
        
    </div>
  )
}

export default TaskItem