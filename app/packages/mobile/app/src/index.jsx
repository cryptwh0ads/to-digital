import domready from "domready"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

domready(() => {
  run()
})

function run() {
  ReactDOM.render(App(), document.getElementById("to-digital-container"))
}
