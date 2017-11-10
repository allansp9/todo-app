const actions = {
  addTodo: (text) => {
    return {
      type: 'ADD_TODO',
      payload: text
    }
  },
  completeTodo: (id) => {
    return {
      type: 'COMPLETE_TODO',
      payload: id
    }
  },
  deleteTodo: (id) => {
    return {
      type: 'DELETE_TODO',
      payload: id
    }
  }
};

export default actions;
