import React, { Component } from 'react';

class TodoItem extends Component {

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
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
