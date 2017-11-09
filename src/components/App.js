import React, { Component } from 'react'
import TodoList from './TodoList'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    return (
      <TodoList/>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App)
