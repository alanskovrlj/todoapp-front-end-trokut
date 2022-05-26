import React from 'react'
import "../styles/todos.css"
import { useState } from 'react';


function Task({name,description, status}) {

  const [taskStatus,setTaskStatus] = useState(status);

  function changeStatus() {
    setTaskStatus(!taskStatus)
  }

  function deleteTask() {
    
  }

  return (
    <div>
   <div className="task-container" >
       <div className="task">
            <h5>{name}</h5>
            <p className='description'>{description}</p>
            <input className='checkbox' type="checkbox" onClick={changeStatus}></input>
            <button className='delete' onClick={deleteTask}> DELETE</button>
       </div>

   </div></div>
  )
}

export default Task