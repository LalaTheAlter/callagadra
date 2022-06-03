import './TodoMenu.scss'
import React from 'react'
import { useDispatch } from 'react-redux'


export default function TodoDeleteMenu({ idToDelete, closeModal }) {
  const dispatch = useDispatch()

  const handleDeletion = (event) => {
    console.log(idToDelete)
    dispatch({ type: "DELETE", payload: idToDelete })
    closeModal(event) // this is taken from ModalOpener
  }

  return (
    <div className='menu'>
      <div className='menu__top-label'>
        <h4>
          Deleting event #{idToDelete}
        </h4>
      </div>

      <div className='menu__main-content'>
        <h3>Do you really want to delete this event?</h3>
      </div>

      <button className='menu__btn' onClick={handleDeletion}>
        Yes 
      </button>
    </div>
  )
}
