import React, { Component } from 'react';
import TodoItem from './TodoItem'


class TodoList extends Component {

  createListItems() {
    return this.props.todos.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
    })
  }

  render() {
    return (
      <ul>
        {this.createListItems()}
      </ul>
    )
  }
}

export default TodoList;
