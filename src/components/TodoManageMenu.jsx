import './TodoManageMenu.scss'
import React from 'react'
import useAllStoreTodos from '../funcs/redux-logic/useAllStoreTodos'
import TodoItem from './todoItem'


export default function TodoManageMenu() {
  const allTodos = useAllStoreTodos()
  
  return (
    <div className='menu menu--manageful'>
      <div className="menu__top-label">
        <h3>your stored events:</h3>
      </div>
      <div className="menu__main-content">
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
