import React from 'react'
import DeleteButton from './DeleteButton'

export default function Headbar() {
  return (
    <header>
      <nav>
        <h1>Callagadra</h1>
        <button onClick={() => {
          localStorage.clear()
          document.dispatchEvent(new Event("localStorageUpdated"))
        }}>Delete all the stuff</button>
        <DeleteButton />
      </nav>
    </header>
  )
}
