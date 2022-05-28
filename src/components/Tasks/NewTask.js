import React from 'react'
import InputBar from '../InputBar/InputBar.js'
import Button from '../Button/Button.js'
import "./Tasks.scss"

function NewTask({addNewTask}) {
  return (
    <>
    <div className='newtask-container'>
      <h5>Name</h5>
      <InputBar type="text"></InputBar>
      <h5>Description</h5>
      <InputBar type="text"></InputBar>
      <Button onClick={()=>{
      addNewTask();
              console.log("Asd");
    }
      
      }></Button>
    </div>
    </>
  )
}

export default NewTask