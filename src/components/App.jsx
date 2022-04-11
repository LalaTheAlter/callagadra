import React from 'react'
import { Provider } from 'react-redux'
import Footerlogo from './Footerlogo'
import Headerbar from './Headerbar'
import Mainframe from './Mainframe'
import { store } from './ReduxTodoStore'

export default function App() {
  return (
    <>
      <Headerbar />
      <Provider store={store}>
        <Mainframe/>
      </Provider>
      <Footerlogo />
    </>
  )
}
