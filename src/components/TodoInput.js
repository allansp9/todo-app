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
    const style = {
      button: {
        width: '100%',
      },
    };
    return (
      <form onSubmit={this.handleSubmit}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <TextField
              value={this.state.inputText}
              onChange={this.handleChange}
              multiline
              required
              placeholder="Ex: pagar contas"
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <Button raised color="primary" aria-label="add" type="submit" style={style.button}>
              <AddIcon />
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default TodoInput;
