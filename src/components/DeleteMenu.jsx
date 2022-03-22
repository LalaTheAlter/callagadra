import React from 'react'
import Portal from '../hocs/Portal'

export default function DeleteMenu({ closeModal }) {
  
  // const closeModal = () => {
  //   setIsModalOpen(false)
  // }

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
          <h4>
            Do you really want it?
          </h4>
          <button onClick={handleDeletion}>
            Yes
          </button>
          <button onClick={closeModal}>
            No
          </button>
        </div>
      </div>
    </Portal>
  )
}
