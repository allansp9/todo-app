import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../redux/actions/index'


class App extends Component {

  render() {
    return (
      <div>
        <TodoInput addTodo={this.props.actions.addTodo} />
        <TodoList actions={this.props.actions} todos={this.props.todos}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
