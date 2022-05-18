// import { hot } from 'react-hot-loader/root';
import React from 'react'
import { Provider } from 'react-redux'
import Footerlogo from './Footerlogo'
import Headerbar from './Headerbar'
import Mainframe from './Mainframe'
import { store } from '../funcs/redux-logic/store'

function App() {
  return (
    <>
      <Provider store={store}>
        <Headerbar />
        <Mainframe/>
        <Footerlogo />
      </Provider>
    </>
  )
}
// if (module.hot) {
//   module.hot.accept()
// }
export default App;