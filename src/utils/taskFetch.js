export const fetchTasks = async (id_l) => await fetch('https://todolisttrokut.herokuapp.com/api/items/getAllItems/:'+id_l).then(res=>res.json())

export const addTask = async () => await fetch('https://todolisttrokut.herokuapp.com/api/items/create')

export const updateTask = async () => await fetch('https://todolisttrokut.herokuapp.com/api/items/modify')

export const deleteTask = async () => await fetch('https://todolisttrokut.herokuapp.com/api/items/delete')