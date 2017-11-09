import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducers/todo-reducer';
import { createLogger } from 'redux-logger'

let finalCreateStore = compose(
  applyMiddleware(createLogger())
)(createStore)

export default function configureStore(initialState = { todos: [] }) {
  return finalCreateStore(reducer, initialState)
}
