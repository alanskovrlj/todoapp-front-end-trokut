export const fetchTodos = async () => await fetch('http://localhost:3000/api/todos/list').then(res=>res.json())

export const addTodo = async () => await fetch('http://localhost:3000/api/todos/create')
