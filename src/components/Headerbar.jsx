import React from 'react'
import DeleteButton from './DeleteButton'

export default function HeaderBar() {
  return (
    <header>
      <nav>
        <h1>Callagadra</h1>
        <DeleteButton />
      </nav>
    </header>
  )
}
