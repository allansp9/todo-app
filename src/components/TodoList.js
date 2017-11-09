import React, { Component } from 'react';
import TodoItems from './TodoItems';

class TodoList extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      items: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift(
        {
          text: this._inputElement.value,
          key: Date.now()
        }
      );

      this.setState({
        items: itemArray
      });

      this._inputElement.value = "";
    }

    e.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('submit button clicked')
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form>
            <input
              ref={(a) => this._inputElement = a}
              placeholder="enter task">
            </input>
            <button onClick={this.handleSubmit.bind(this)}>add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items}
                   delete={this.deleteItem}/>
      </div>
    );
  }
};

export default TodoList;
