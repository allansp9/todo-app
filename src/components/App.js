import React, { Component } from 'react';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import actions from '../actions';
import 'typeface-roboto';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';


class App extends Component {

  render() {


    return (
      <div>
        <Grid container direction="column">
          <Grid item>
            <Typography type="display2">TODO List</Typography>
          </Grid>
          <Grid item>
            <TodoInput addTodo={this.props.actions.addTodo} />
          </Grid>
          <Grid item>
            <TodoList actions={this.props.actions} todos={this.props.todos}/>
          </Grid>
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
