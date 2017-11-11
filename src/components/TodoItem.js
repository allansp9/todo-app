import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Done from 'material-ui-icons/Done';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';


    const styles = {
      item: {
        background: 'white',
        padding: 10
      }
    }


class TodoItem extends Component {

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

    render() {
      return (
          <div className={this.props.classes.item}>
            <Grid container alignItems='center' justify='space-between'>
              <Grid item>{this.props.todo.text}</Grid>
              <Grid item>
                <IconButton onClick={this.handleComplete.bind(this)}>
                  <Done />
                </IconButton>
                <IconButton  aria-label="Delete" onClick={this.handleDelete.bind(this)} >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          </div>
      )
    }
  }

export default withStyles(styles)(TodoItem);
