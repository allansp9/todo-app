import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import TodoItem from './TodoItem';


class TodoList extends Component {

  createListItems() {
    return this.props.todos.map((todo) => {
      return (
        <Grid item key={todo.id}>
          <TodoItem todo={todo} actions={this.props.actions}/>
        </Grid>
      );
    })
  }

  render() {
    return (
      <div>
        <Grid container direction="column" spacing={24}>
          {this.createListItems()}
        </Grid>
      </div>
    )
  }
}

export default TodoList;
