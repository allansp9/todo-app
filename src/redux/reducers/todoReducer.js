function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let todoReducer = (todos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [{
          id: getId(todos),
          completed: false,
          text: action.text
        }, ...todos]
    case 'COMPLETE_TODO':
      return todos.map((todo) => {
        return todo.id === action.id ?
          Object.assign({}, todo, {completed: !todo.completed}) : todo
      })
    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo.id !== action.id
      })
    default:
      return todos;
  }
}

export default todoReducer
