import React from 'react'
import Portal from './Portal'

export default function DeleteMenu({ closeModal }) {

  const handleDeletion = () => {
    localStorage.clear()
    document.dispatchEvent(new Event("localStorageUpdated")) // goes to => calendarGrid
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
