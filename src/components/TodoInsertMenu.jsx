import './TodoMenu.scss'
import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import useTodosUnusedInDate from '../funcs/redux-logic/useTodosUnusedInDate'
import TodoList from './TodoList'
import DateLabel from './DateLabel'


export default function TodoInsertMenu({ closeModal, selectedDate }) {
  
  const availableTodos = useTodosUnusedInDate(selectedDate)

  const [picked, setPicked] = useState([])
  const pick = (id) => () => {
    switch (picked.includes(id)) {
      case false: 
        setPicked((prevPicked) => prevPicked.concat(id))
        break;
      case true:
        setPicked((prevPicked) => prevPicked.filter(el => el !== id))
        break;
    }
  }

  const dispatch = useDispatch()
  const handleSubmit = (event) => {
    dispatch({type: 'INSERT', payload: [picked, selectedDate]})
    closeModal(event) // this is taken from ModalOpener
  }

  return (
    <div className='menu'>     
      <div className="menu__top-label">
        <DateLabel selectedDate={selectedDate} />
      </div> 

      <div className='menu__main-content' >
        <TodoList 
          items={availableTodos} 
          itemsSelected={picked}
          itemOnClickFn={pick} 
          placeholderText={"No events are available for this date"} 
          />
      </div>
      
      <button 
        className='menu__btn'
        disabled={picked.length < 1} 
        onClick={handleSubmit} 
        type="submit">
        Appoint
      </button>
    </div>
  )
}
