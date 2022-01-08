import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"

const App = () => {
  return (
    <Router>
      <Switch>
        <LoginPage />
        <Route exact path="/anotherPage" component={HomePage} />
      </Switch>
    </Router>
  )
}

export default App
