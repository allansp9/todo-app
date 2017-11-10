function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

const todoReducer = (todos = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [{
          id: getId(todos),
          completed: false,
          text: action.payload
        }, ...todos]

    case 'COMPLETE_TODO':
      return todos.map((todo) => {
        return todo.id === action.payload ?
          Object.assign({}, todo, {completed: !todo.completed}) : todo
      })
    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo.id !== action.payload
      })
    default:
      return todos;
  }
}

export default todoReducer;
