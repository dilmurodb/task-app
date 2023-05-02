import './App.css';
import React, { useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

function App() {

  const [tasks, setTasks] = useState([{title: '', body: ''}])

  const addTask = (newTask) => {
    setTasks([...tasks, newTask])
    console.log(tasks)
  }
  return (
    <div className="App">
      <h1>task-app</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;
