import React from 'react'
import "./Tasks.scss"
import { useState } from 'react';


function Task({ id, name, description, status, updateStatus, removeTask }) {
  console.log(id);
  return (
  <div>
   <div className="task-container" >
       <div className="task">
            <h5>{name}</h5>
            <p className='description'>{description}</p>
            <input className='checkbox' type="checkbox" onClick={updateStatus}></input>
            <button className='delete' onClick={()=>{
              removeTask(id)
            }}
            > DELETE</button>
       </div>
   </div>
   </div>
  )
}

export default Task