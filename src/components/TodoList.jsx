import React from 'react'
import TodoItem from './todoItem'
import './TodoList.scss'

export default function TodoList({ items, placeholderText = null, itemOnClickFn, dateForRemoveButton, withDeleteButton, withChangeButton}) {

  return (
    <div className="todo-list">
      {
        items ? 
        items.map((todoID) => (
          <div key={todoID} className="todo-list__list-item">
            <TodoItem 
              todoID={todoID}
              dateForRemoveButton={dateForRemoveButton} // adds a remove button if passed
              withDeleteButton={withDeleteButton}
              withChangeButton={withChangeButton}
              onClickFn={itemOnClickFn ? itemOnClickFn(todoID) : null} // onClickFn must be closed on the id before everything else
            />
          </div>
          ))
        :
        placeholderText
      }
    </div>
  )
}
