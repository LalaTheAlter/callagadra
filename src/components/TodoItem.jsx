import React from 'react'
import formatTimeInterval from '../funcs/formatTimeInterval'

export default function TodoItem({start, end, text, todoID}) {

  
  const handleSelection = () => { 
    console.log("Event selected:", todoID)
    document.dispatchEvent(new CustomEvent("newTodoItemSelected", {detail: todoID})) // goes to => todoForm
  }

  return (
    <div 
      onClick={handleSelection}
      className='TodoItem'
      >
      <div>
        {formatTimeInterval(start, end)}
      </div>
      <div>
        {text}
      </div>
    </div>
  )
}
