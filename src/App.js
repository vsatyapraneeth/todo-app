import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Filter from './components/Filter';
import './App.css'; 

const App = () => {
  const [currentTask, setCurrentTask] = useState(null);

  return (
    <Provider store={store}>
      <div className="container">
        <h1>To-Do List</h1>
        <TaskForm currentTask={currentTask} setCurrentTask={setCurrentTask} />
        <Filter />
        <TaskList setCurrentTask={setCurrentTask} />
      </div>
    </Provider>
  );
};

export default App;