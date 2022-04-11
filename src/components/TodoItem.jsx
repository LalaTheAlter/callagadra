import React from 'react'
import formatTimeInterval from '../funcs/formatTimeInterval'

export default function TodoItem({start, end, text, todoID, withEditButton}) {

  
  const handleSelectionForEditing = () => { 
    console.log("Event selected:", todoID)
    document.dispatchEvent(new CustomEvent("newTodoItemSelected", {detail: todoID})) // goes to => todoForm
  }

  return (
    <div 
      className='TodoItem' >
      <div>
        {formatTimeInterval(start, end)}
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
