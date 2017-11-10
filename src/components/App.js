import React, { Component } from 'react'
import TodoList from '../components/TodoList'
import TodoInput from '../components/TodoInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoInput addTodo={this.props.actions.addTodo} />
        <TodoList actions={this.props.actions} todos={this.props.todos}/>
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
