import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import './index.css';

var destination = document.querySelector("#root")

ReactDOM.render(
    <TodoList />,
    destination
);
