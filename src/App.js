import './App.css';
import React, { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import SortTaskList from './components/SortTaskList'

function App() {

  const [tasks, setTasks] = useState([{title: 'Task title...', body: 'Task description...', id: 7281015}])
  const [sortedTasks, setSortedTasks] = useState('')
  
  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const sortTasks = (sort) => {
    setTasks([...tasks].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <h1>task-app</h1>
      <TaskForm addTask={addTask} />
      <hr style={{margin: '20px'}}/>
      <SortTaskList 
        defaultValue='--Please choose how to sort--'
        options={[{value: 'title', name: 'Sort by title'}, {value: 'body', name: 'Sort by description'}]}
        value={sortedTasks}
        onChange={sortTasks} 
      />
      {tasks.length === 0
        ? 
        <h1>There is no tasks...</h1> 
        : 
        <TaskList tasks={tasks} deleteTask={deleteTask} />}
    </div>
  );
}

export default App;
