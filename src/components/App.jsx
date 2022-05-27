
import React from 'react'
import { Provider } from 'react-redux'
import Headerbar from './Headerbar'
import Mainframe from './Mainframe'
import { store } from '../funcs/redux-logic/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Headerbar />
        <Mainframe/>
      </Provider>
    </>
  )
}

export default App;