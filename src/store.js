import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { reducer as formReducer } from 'redux-form';
import todoReducer from './reducers/todoReducer';

// cria a store onde todas as informações do app (mainly os states) serão armazenados.
export default createStore(
  //  os reducers determinam o que é armazenado na store
  combineReducers({ todos: todoReducer, form: formReducer }),
  {
    todos: [
      {
        id: 1,
        text: 'comprar: laranja, banana, abacaxi',
        color: '#EEEEEE',
      },
      {
        id: 2,
        text: 'pagar contas',
        color: '#EEEEEE',
      },
    ],
  },
  applyMiddleware(createLogger()),
);
