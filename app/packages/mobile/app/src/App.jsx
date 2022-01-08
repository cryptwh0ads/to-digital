import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LayoutComponent from "./components/Layout"

import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"

const App = () => {
  return (
    <Router>
      <Switch>
        <LayoutComponent>
          <LoginPage />
          <Route exact path="/home-board" component={HomePage} />
        </LayoutComponent>
      </Switch>
    </Router>
  )
}

export default App
