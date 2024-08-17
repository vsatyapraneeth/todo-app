import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = ({ setCurrentTask }) => {
  const tasks = useSelector(state => state.tasks);
  const filter = useSelector(state => state.filter);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'COMPLETED') return task.completed;
    if (filter === 'INCOMPLETE') return !task.completed;
    return true;
  });

  return (
    <div>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} setCurrentTask={setCurrentTask} />
      ))}
    </div>
  );
};

export default TaskList;