import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useStoreUnusedTodos from '../funcs/redux-logic/useStoreUnusedTodos'
import TodoItem from './todoItem'


export default function TodoInsertMenu({ closeModal, selectedDate }) {
  const availableTodos = useStoreUnusedTodos(selectedDate)

  const [picked, setPicked] = useState([])
  const pick = (id) => () => {
    if(!picked.includes(id)) {
      setPicked((prev) => prev.concat(id))
    }
  }

  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    dispatch({type: 'INSERT', payload: [picked, selectedDate]})
    closeModal(event) // this is taken from ModalOpener
  }

  return (
    <div className='insert-menu'>      
      <div className='insert-menu__list' >
        {         
          availableTodos.length > 0 ? 
          availableTodos.map((todoID) => (
            <TodoItem 
            todoID={todoID} 
            key={todoID + Math.random()}
            onClickFn={pick(todoID)}
            />
          )) 
          : "There are no todos created yet, but you can write some!"
        }
      </div>
      <button 
        className='insert-menu__submit-btn'
        disabled={picked.length < 1} 
        onClick={handleSubmit} 
        type="submit">
        appoint
      </button>
    </div>
  )
}
