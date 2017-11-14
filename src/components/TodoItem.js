import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Done from 'material-ui-icons/Done';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Tooltip from 'material-ui/Tooltip';

const styles = {
  item: {
    padding: 10,
    marginBottom: 5,
    background: '#5db2e8',
    '&:hover': {
      background: '#54a0d1',
    },
    boxShadow:
      ' 0px 1px 5px 0px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 3px 1px -2px rgba(0, 0, 0, 0.12)',
  },
  text: {
    wordBreak: 'break-all',
    whiteSpace: 'pre-line',
    font: '500 20px Calibri',
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
      <Grid
        container
        alignItems="center"
        justify="space-between"
        className={this.props.classes.item}
      >
        <Grid item xs={9}>
          <Typography className={this.props.classes.text}>{this.props.todo.text}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Tooltip id="complete" title="Concluir" placement="left-start">
            <IconButton onClick={this.handleComplete}>
              <Done color={this.props.todo.color} />
            </IconButton>
          </Tooltip>
          <Tooltip id="delete" title="Excluir" placement="left-start">
            <IconButton aria-label="Delete" onClick={this.handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(TodoItem);
