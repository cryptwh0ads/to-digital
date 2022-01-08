import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LayoutComponent from "./components/Layout"

import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import SearchPage from "./pages/Search"

const App = () => {
  return (
    <Router>
      <Switch>
        <LayoutComponent>
          <Route exact path="/home-board" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <LoginPage />
        </LayoutComponent>
      </Switch>
    </Router>
  )
}

export default App
