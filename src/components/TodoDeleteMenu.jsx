import './TodoDeleteMenu.scss'
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
    <div className='delete-alert'>
      <div>
        <h4 className='delete-alert__text'>
          Do you really want to delete this event?
        </h4>
      </div>
      <div>
        <button className='delete-alert__submit-btn' onClick={handleDeletion}>
          Yes 
        </button>
      </div>
    </div>
  )
}
