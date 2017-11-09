import React, { Component } from 'react'

class UserInfo extends Component {
  handleNewId() {
      
  }

  render() {
    return (
      <li>
        <div>username: {this.props.user.username}</div>
        <div>id: {this.props.user.id}</div>
        <button onCLick={this.handleNewId.bind(this)}>Update with random Id</button>
      </li>
    )
  }
}
