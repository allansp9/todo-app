import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import IconButton from 'material-ui/IconButton';
import GithubCircle from 'mdi-material-ui/GithubCircle';
import Email from 'mdi-material-ui/Email';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import actions from '../actions';

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch),
  };
}

const App = (props) => {
  return (
    <Grid container direction="column" justify="center">
      <Grid item>
        <Typography type="display3" align="center">
          TODO List
        </Typography>
      </Grid>
      <Grid item>
        <TodoInput addTodo={props.actions.addTodo} />
      </Grid>
      <Grid item container justify="center">
        <IconButton href="https://github.com/allansp9" target="_blank" rel="noopener noreferrer">
          <GithubCircle />
        </IconButton>
        <IconButton href="mailto:allansp9@gmail.com">
          <Email />
        </IconButton>
      </Grid>
      <Grid item>
        <TodoList actions={props.actions} todos={props.todos} />
      </Grid>
    </Grid>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
