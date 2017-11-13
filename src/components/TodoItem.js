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
    background: '#66c3ff',
    padding: 10,
    borderRadius: 10,
    border: '2px solid #EEEEEE',
    '&:hover': {
      background: '#5db2e8',
    },
  },
  text: {
    overflowWrap: 'break-word',
    whiteSpace: 'pre-line',
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
    const itemStyle = {
      borderColor: this.props.todo.color,
    };

    return (
      <div className={this.props.classes.item} style={itemStyle}>
        <Grid container alignItems="flex-start" justify="space-between">
          <Grid item xs={12} sm={10}>
            <Typography className={this.props.classes.text}>{this.props.todo.text}</Typography>
          </Grid>
          <Grid item xs={12} sm={2}>
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
      </div>
    );
  }
}

export default withStyles(styles)(TodoItem);
