import React, { useState } from 'react'
import DeleteMenu from './DeleteMenu'

export default function DeleteButton() {

  const [isModalOpened, setIsModalOpened] = useState(false)

  const closeModal = () => {
    setIsModalOpened(false)
  }

  return (
    <>
      <button onClick={() => {setIsModalOpened(true)}}>
        delete everything
      </button>
      {isModalOpened && <DeleteMenu closeModal={closeModal}/> }
    </>
  )
}
// !!!!! make a portal!!!!