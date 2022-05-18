import React from 'react'
import DeleteMenu from './DeleteMenu'
import ModalOpener from '../hocs/ModalOpener'

export default function DeleteButton() {

  return (
    <>
      <ModalOpener buttonText={"delete everything"}>
        <DeleteMenu />
      </ModalOpener>
    </>
  )
}


