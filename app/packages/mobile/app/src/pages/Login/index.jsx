import React from "react"

import { Route } from "react-router-dom"
import LoginComponent from "../../components/Login"
import SignUpComponent from "../../components/Login/SignUp"
import HomePage from "../Home"

const LoginPage = () => {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/sign-up" component={SignUpComponent} />
    </>
  )
}

export default LoginPage
