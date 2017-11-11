import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Done from 'material-ui-icons/Done';
import Grid from 'material-ui/Grid';


class TodoItem extends Component {

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

    render() {
      return (
        <div>
          <Grid container>
            <Grid item><p>{this.props.todo.text}</p></Grid>
            <Grid item><IconButton onClick={this.handleComplete.bind(this)}><Done /></IconButton></Grid>
            <Grid item>
              <IconButton  aria-label="Delete" onClick={this.handleDelete.bind(this)} >
                <DeleteIcon />
              </IconButton>
            </Grid>
          </Grid>
        </div>
      )
    }
  }

export default TodoItem;
