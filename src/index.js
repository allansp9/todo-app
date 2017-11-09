import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './redux/configureStore';
import { Provider } from 'react-redux';
import App from './components/App';
import './index.css';

const destination = document.querySelector("#root");

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }],
  user: {
    username: 'kurt',
    id: 13
  }
}

let store = configureStore(initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    destination
);
