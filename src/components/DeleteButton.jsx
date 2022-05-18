import React, { useState } from 'react'
import DeleteMenu from './DeleteMenu'

export default function DeleteButton() {

  const [isModalOpened, setIsModalOpened] = useState(false)

  const closeModal = () => {
    setIsModalOpened(false)
  }

  const openModal = () => {
    setIsModalOpened(true)
  }

  return (
    <>
      <button onClick={openModal}>
        delete everything
      </button>
      {isModalOpened && <DeleteMenu closeModal={closeModal}/> }
    </>
  )
}
