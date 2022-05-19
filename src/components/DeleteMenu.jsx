import React from 'react'
import { useDispatch } from 'react-redux'

export default function DeleteMenu({ closeModal }) {

  const dispatch = useDispatch()

  const handleDeletion = (event) => {
    dispatch({ type: "ANNIHILATE" })
    closeModal(event) // this is taken from ModalOpener
  }

  return (
    <div className='DeleteMenuContainer'>
      <div>
        <h4>Do you really want it?</h4>
      </div>
      <div>
        <button onClick={handleDeletion}> Yes </button>
      </div>
    </div>
  )
}
