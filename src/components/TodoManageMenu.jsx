import './TodoMenu.scss'
import React from 'react'
import useAllTodos from '../funcs/redux-logic/useAllTodos'
import TodoList from './TodoList'


export default function TodoManageMenu() {
  const allTodos = useAllTodos()
  
  return (
    <div className='menu'>
      <div className="menu__top-label">
        <h3>All your stored events:</h3>
      </div>

      <div className="menu__main-content">
        <TodoList 
          items={allTodos}
          withDeleteButton
          withChangeButton/>
      </div>
    </div>
  )
}
