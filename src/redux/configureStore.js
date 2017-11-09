import { createStore} from 'redux';
import reducer from './reducers/todo-reducer';

export default function configureStore(initialState = { todos: [] }) {
  return createStore(reducer, initialState)
}
