import './styles/main'
console.log("Hello, world")

localStorage.setItem("2022_3_4",  JSON.stringify({ time: "12:59", text: "KSY"}))

import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

ReactDOM.render(
  <App />,
  document.getElementById("root")
)