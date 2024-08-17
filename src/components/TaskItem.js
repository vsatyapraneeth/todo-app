import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../redux/actions';

const TaskItem = ({ task, setCurrentTask }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => dispatch(toggleTask(task.id))}
      />
      <button onClick={() => setCurrentTask(task)}>Edit</button>
      <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
    </div>
  );
};

export default TaskItem;