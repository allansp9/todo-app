import React, { Component } from 'react';
import actions from '../redux/actions/index'

class TodoItem extends React.Component {

  handleComplete() {
    this.props.dispatch(actions.completeTodo(this.props.todo.id))
  }

  handleDelete() {
    this.props.dispatch(actions.deleteTodo(this.props.todo.id))
  }

    render() {
      return (
        <li>
          <p>{this.props.todo.text}</p>
          <button onClick={this.handleComplete.bind(this)}>check</button>
          <button onClick={this.handleDelete.bind(this)}>delete</button>
        </li>
      )
    }
  }

export default TodoItem;
