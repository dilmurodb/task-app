import React, { useState } from 'react'

const TaskForm = ({addTask}) => {
    const [taskTitle, setTaskTitle] = useState('')
    const [taskBody, setTaskBody] = useState('')

    const addNewTask = (e) => {
        e.preventDefault()
        const newTask = {title: taskTitle, body: taskBody, id: Date.now()}
        addTask(newTask)
        setTaskTitle('')
        setTaskBody('')
    }

  return (
    <form>
        <input 
            type='text' 
            placeholder='Task title...' 
            onChange={e => setTaskTitle(e.target.value)}
            value={taskTitle}
        ></input>
        <input 
            type='text' 
            placeholder='Task description...' 
            onChange={e => setTaskBody(e.target.value)}
            value={taskBody}
        ></input>
        <button
            onClick={addNewTask}>Add task</button>
    </form>
  )
}

export default TaskForm