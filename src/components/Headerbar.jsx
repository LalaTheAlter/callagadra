import React from 'react'

export default function Headbar() {
  return (
    <header>
      <nav>
        <h1>Callagadra</h1>
        <button onClick={() => {
          localStorage.clear()
          document.dispatchEvent(new Event("localStorageUpdated"))
        }}>Delete all the stuff</button>
      </nav>
    </header>
  )
}
