import React from 'react'
import formatTimeInterval from '../funcs/formatTimeInterval'
import useStoreTodo from '../funcs/redux-logic/useStoreTodo'

export default function TodoItem({ todoID, withEditButton}) {
  
  const {startTime, endTime, text} = useStoreTodo(todoID)
  
  const handleSelectionForEditing = () => { 
    console.log("Event selected:", todoID)
    document.dispatchEvent(new CustomEvent("newTodoItemSelected", {detail: todoID})) // goes to => todoBox
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
