import './TodoInsertMenu.scss'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useTodosUnusedInDate from '../funcs/redux-logic/useTodosUnusedInDate'
import TodoList from './TodoList'


export default function TodoInsertMenu({ closeModal, selectedDate }) {
  
  const availableTodos = useTodosUnusedInDate(selectedDate)

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
        <TodoList 
          items={availableTodos} 
          itemOnClickFn={pick} 
          placeholderText={"No todos are available for this date"} 
          />
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
