import React from "react"

import { Switch, Route } from "react-router-dom"
import LoginComponent from "../../components/Login"
import SignUpComponent from "../../components/Login/SignUp"

const LoginPage = () => {
  return (
    <>
      <Route exact path="/" component={LoginComponent} />
      <Route exact path="/sign-up" component={SignUpComponent} />
    </>
  )
}

export default LoginPage
