import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
// import { ListItem } from 'material-ui/List';
import ActionDone from 'material-ui/svg-icons/action/done';
// import IconButton from 'material-ui/IconButton';
import { TableRow, TableRowColumn } from 'material-ui/Table';

class TodoItem extends Component {

  handleComplete() {
    this.props.actions.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.actions.deleteTodo(this.props.todo.id)
  }

    render() {
      return (
        <TableRow>
          <TableRowColumn>
          <p>{this.props.todo.text}</p>
          <RaisedButton onClick={this.handleComplete.bind(this)} icon={<ActionDone />}></RaisedButton>
          <button onClick={this.handleDelete.bind(this)}>delete</button>
          </TableRowColumn>
        </TableRow>
      )
    }
  }

export default TodoItem;
