import React from 'react'
import useAllStoreTodos from '../funcs/redux-logic/useAllStoreTodos'
import TodoItem from './todoItem'


export default function TodoManageMenu() {
  const allTodos = useAllStoreTodos()
  
  return (
    <div className='todoManageMenu'>
      <div className="topPanel">
        <h3>your stored events:</h3>
      </div>
      <div className="bottomList">
      {         
        allTodos.map((todoID) => (
          <TodoItem 
          todoID={todoID} 
          key={todoID + Math.random()}
          withDeleteButton
          withChangeButton
          />
        ))
      }
      </div>
    </div>
  )
}
