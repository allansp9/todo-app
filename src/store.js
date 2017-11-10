import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import todoReducer from './reducers/todoReducer';

export default createStore(
  combineReducers({todos: todoReducer}), applyMiddleware(createLogger())
);
