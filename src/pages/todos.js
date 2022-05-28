import React from 'react'
import Task from '../components/Tasks/Task.js'
import { useState, useEffect } from 'react'
import { fetchTasks, addTask, deleteTask, updateTask } from '../utils/taskFetch'
import NewTask from '../components/Tasks/NewTask';

var test_id=100
var defaultTask = {
  id: 0,
  name: "prvi",
  description: "desc",
  status: false
}

function Todos({id_l = 0}) {
  const [tasks,setTasks] = useState([defaultTask])

  async function getTasks () {
    try {
      let data = await fetchTasks(id_l);
      if(data.length>0) setTasks(...data);
    } catch (error) {
      console.log(error)
    }
  }

  async function updateStatus (taskStatus) {
    try {  
      await updateTask(id_l, !taskStatus);
    } catch (error) {
      console.log(error)
    }
  }

  async function removeTask (id) {
    try {  
      await deleteTask(id); 
      setTasks(tasks.filter(
        (item)=>{
          if(id != item.id) return item;
        })) 
    } catch (error) {
      console.log(error)
    }
  }

  async function addNewTask (taskName,description) {
    try {
      let id = await addTask(id_l, taskName, description);
      id = test_id++;
      let newTask = {
        id: id,
        name: taskName,
        description: description,
        status: false
      }
      setTasks([...tasks, newTask])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getTasks();
  },[])


  return (
    <div>
      <h1 className='title'>TODOS</h1>
      <NewTask addNewTask={addNewTask}></NewTask>
      {tasks.map((item)=>{
        return <Task
        key={item.id}
        {...item} 
        updateStatus={updateStatus} 
        removeTask={removeTask}>
        </Task>
      })}
      
    </div>
  )
}

export default Todos