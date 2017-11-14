import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TodoItem from './TodoItem';

class TodoList extends Component {
  createListItems() {
    return this.props.todos.map((todo) => {
      return (
        <Grid item xs={12} key={todo.id}>
          <TodoItem todo={todo} actions={this.props.actions} />
        </Grid>
      );
    });
  }

  render() {
    return <Grid container>{this.createListItems()}</Grid>;
  }
}

export default TodoList;
