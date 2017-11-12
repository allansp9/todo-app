import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';

class TodoInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputText: '',
    };
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value.trim(),
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputText !== '') {
      this.props.addTodo(this.state.inputText);
      this.setState({
        inputText: '',
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <TextField
            value={this.state.inputText}
            onChange={this.handleChange.bind(this)}
            autoFocus
            multiline
            required
            placeholder="Ex: pagar contas"
          />
          <Button fab color="primary" aria-label="add" type="submit">
            <AddIcon />
          </Button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
