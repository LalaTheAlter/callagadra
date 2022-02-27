import './styles/main'
console.log("Hello, world")

localStorage.setItem("TodosData",  JSON.stringify({ 2022: {1: {25: "ya ebal"}}}))

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById("root")
)