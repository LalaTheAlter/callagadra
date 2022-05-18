import React from 'react'
import { useDispatch } from 'react-redux'
import Portal from '../hocs/Portal'

export default function DeleteMenu({ closeModal }) {
  const dispatch = useDispatch()

  const handleDeletion = () => {
    dispatch({ type: "ANNIHILATE" })
  }

  return (
    <Portal>
      <div
       className='modal'
       onClick={closeModal}>
        <div className='DeleteMenuContainer'>
          <div>
            <h4>Do you really want it?</h4>
          </div>
          <div>
            <button onClick={handleDeletion}> Yes </button>
            <button onClick={closeModal}> No </button>
          </div>
        </div>
      </div>
    </Portal>
  )
}
