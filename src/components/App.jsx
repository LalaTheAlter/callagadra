
import React from 'react'
import { Provider } from 'react-redux'
import Mainframe from './Mainframe'
import { store } from '../funcs/redux-logic/store'

function App() {
  return (
    <Provider store={store}>
      <Mainframe/>
    </Provider>
  )
}

export default App;