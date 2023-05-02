import './App.css';
import React, { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([{title: 'Task title...', body: 'Task description...', id: 7281015}])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
    console.log(tasks)
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  return (
    <div className="App">
      <h1>task-app</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
