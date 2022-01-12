import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LayoutComponent from "./components/Layout"
import HistoryPage from "./pages/History"

import HomePage from "./pages/Home"
import LoginPage from "./pages/Login"
import ProfilePage from "./pages/Profile"
import SearchPage from "./pages/Search"

const App = () => {
  return (
    <Router>
      <Switch>
        <LayoutComponent>
          <Route exact path="/home-board" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/history" component={HistoryPage} />

          <ProfilePage />
          <LoginPage />
        </LayoutComponent>
      </Switch>
    </Router>
  )
}

export default App
