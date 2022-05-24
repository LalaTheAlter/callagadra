import React from 'react'
import { useDispatch } from 'react-redux'


export default function TodoDeleteButton({ idToDelete, closeModal }) {
  const dispatch = useDispatch()

  const handleDeletion = (event) => {
    console.log(idToDelete)
    dispatch({ type: "DELETE", payload: idToDelete })
    closeModal(event) // this is taken from ModalOpener
  }

  return (
    <div className='TodoDeleteButton-wrapper'>
      <div>
        <h4>Do you really want to delete this event?</h4>
      </div>
      <div>
        <button onClick={handleDeletion}> Yes </button>
      </div>
    </div>
  )
}
