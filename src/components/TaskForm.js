import React from 'react'

const TaskForm = () => {
  return (
    <form>
        <input type='text' placeholder='Task title...'></input>
        <input type='text' placeholder='Task discription...'></input>
        <button>Add task</button>
    </form>
  )
}

export default TaskForm