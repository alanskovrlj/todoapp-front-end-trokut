import React from 'react'
import "../styles/todos.css"
import Task from '../components/Task.js'
import { useState, useEffect } from 'react'
import { fetchTodos } from '../utils/todosFetch'

var defaultTask = {
  name: "prvi",
  description: "desc",
  status: false
}

function Todos() {
  const [tasks,setTasks] = useState([defaultTask,defaultTask])

  async function getTodos () {
    var a = await fetchTodos();
    setTasks(a)
  }

  useEffect(()=>{
    getTodos();
  },[])


  return (
    <div>
      <h1 className='title'>TODOS</h1>
      {tasks.map((item)=>{
        return <Task {...item} ></Task>
      })}
      
    </div>
  )
}

export default Todos