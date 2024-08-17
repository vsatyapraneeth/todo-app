import { combineReducers } from 'redux';
import { ADD_TASK, DELETE_TASK, UPDATE_TASK, TOGGLE_TASK, FILTER_TASKS } from './actions';

const tasksReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case DELETE_TASK:
      return state.filter(task => task.id !== action.payload);
    case UPDATE_TASK:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
    default:
      return state;
  }
};

const filterReducer = (state = 'ALL', action) => {
  switch (action.type) {
    case FILTER_TASKS:
      return action.payload;
    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filter: filterReducer,
});