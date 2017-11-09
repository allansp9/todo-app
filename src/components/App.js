import React, { Component } from 'react'
import TodoList from './TodoList'
import TodoInput from './TodoInput'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    return (
      <div>
        <TodoInput dispatch={this.props.dispatch}/>
        <TodoList dispatch={this.props.dispatch} todos={this.props.todos}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
