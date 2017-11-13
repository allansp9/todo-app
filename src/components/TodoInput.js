import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from 'material-ui-icons/Add';
import Grid from 'material-ui/Grid';

class TodoInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      inputText: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      inputText: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.inputText.trim().length !== 0) {
      this.props.addTodo(this.state.inputText);
    }
    this.setState({
      inputText: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container alignItems="flex-end" justify="space-between">
          <Grid item xs={9}>
            <TextField
              value={this.state.inputText}
              onChange={this.handleChange}
              autoFocus
              multiline
              required
              placeholder="Ex: pagar contas"
              fullWidth
            />
          </Grid>
          <Grid item>
            <Button raised color="primary" aria-label="add" type="submit">
              <AddIcon />
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default TodoInput;
