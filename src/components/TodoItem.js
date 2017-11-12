import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Done from 'material-ui-icons/Done';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const styles = {
  item: {
    background: 'white',
    padding: 10,
  },
  text: {
    background: 'grey',
    overflowWrap: 'break-word',
    maxWidth: 300,
  },
};

class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleComplete = this.handleComplete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id);
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id);
  }

  render() {
    return (
      <div className={this.props.classes.item}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Typography className={this.props.classes.text}>{this.props.todo.text}</Typography>
          </Grid>
          <Grid item>
            <IconButton onClick={this.handleComplete}>
              <Done color={this.props.todo.color} />
            </IconButton>
            <IconButton aria-label="Delete" onClick={this.handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(TodoItem);
