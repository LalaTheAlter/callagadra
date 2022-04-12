import React from 'react'
import { useSelector } from 'react-redux'
import formatTimeInterval from '../funcs/formatTimeInterval'

export default function TodoItem({ todoID, withEditButton}) {
  
  const {startTime, endTime, text} = useSelector(store => store[todoID])
  
  const handleSelectionForEditing = () => { 
    console.log("Event selected:", todoID)
    document.dispatchEvent(new CustomEvent("newTodoItemSelected", {detail: todoID})) // goes to => todoForm
  }

  return (
    <div 
      className='TodoItem'
      >
      <div>
        {formatTimeInterval(startTime, endTime)}
      </div>

      <div>
        {text}
      </div>

      {withEditButton && 
        <button
          onClick={handleSelectionForEditing}
          type="submit">
          Edit
        </button>  
      }
    </div>
  )
}
