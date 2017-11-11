import React, { Component } from 'react';
import TodoItem from './TodoItem'
// import { List } from 'material-ui/List';
import { Table, TableBody } from 'material-ui/Table';

class TodoList extends Component {

  createListItems() {
    return this.props.todos.map((todo) => {
      return <TodoItem key={todo.id} todo={todo} actions={this.props.actions}/>
    })
  }

  render() {
    return (
      <Table>
        <TableBody>
        {this.createListItems()}
        </TableBody>
      </Table>
    )
  }
}

export default TodoList;
