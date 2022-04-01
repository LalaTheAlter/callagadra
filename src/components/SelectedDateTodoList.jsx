import React from 'react'
import loadTodoData from '../funcs/loadTodoData'
import mapArrayToTodoItems from '../funcs/mapArrayToTodoItems'

export default function SelectedDateTodoList({ selectedDate }) {

  return (
    <div className="TodoListContainer">
      {
        loadTodoData(selectedDate) ? 
        loadTodoData(selectedDate).map(mapArrayToTodoItems)
        :
        <h4 className="TodoListContainer-placeholder">
          Start writing something!
        </h4>
      }
    </div>
  )
}
