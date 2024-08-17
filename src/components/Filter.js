import React from 'react';
import { useDispatch } from 'react-redux';
import { filterTasks } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(filterTasks('ALL'))}>All Tasks</button>
      <button onClick={() => dispatch(filterTasks('COMPLETED'))}>Completed Tasks</button>
      <button onClick={() => dispatch(filterTasks('INCOMPLETE'))}>Incomplete Tasks</button>
    </div>
  );
};

export default Filter;