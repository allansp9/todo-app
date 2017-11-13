import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
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
  const styles = {
    container: {
      maxWidth: 500,
      width: '100vw',
    },
    header: {
      marginBottom: 30,
    },
  };
  return (
    <div>
      <Grid container direction="column" justify="center" style={styles.container}>
        <Grid item>
          <Typography type="display2" align="center" style={styles.header}>
            TODO List
          </Typography>
        </Grid>
        <Grid item>
          <TodoInput addTodo={props.actions.addTodo} />
        </Grid>
        <Grid item>
          <TodoList actions={props.actions} todos={props.todos} />
        </Grid>
      </Grid>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
