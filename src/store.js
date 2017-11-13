import { combineReducers, createStore } from 'redux';
import todoReducer from './reducers/todoReducer';

export default createStore(combineReducers({ todos: todoReducer }));
