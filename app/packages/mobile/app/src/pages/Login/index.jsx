import React from "react"

import { Route } from "react-router-dom"
import LoginComponent from "../../components/Login"
import SignUpComponent from "../../components/Login/SignUp"
import HomePage from "../Home"

const LoginPage = () => {
  return (
    <>
      <Route exact path="/sign-up" component={SignUpComponent} />
      <Route exact path="/" component={LoginComponent} />
    </>
  )
}

export default LoginPage
