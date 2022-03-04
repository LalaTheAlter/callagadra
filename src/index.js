import './styles/main'
console.log("Hello, world")

localStorage.setItem("TodosData",  JSON.stringify({ 2022: {2: {5: {'11:50': 'hh'}}}}))

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById("root")
)