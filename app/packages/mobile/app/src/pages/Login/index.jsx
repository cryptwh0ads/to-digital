import React from "react"

import { Route } from "react-router-dom"
import LoginComponent from "../../components/Login"
import SignUpComponent from "../../components/Login/SignUp"
import ConfirmEmailAndGenerateToken from "../../components/Profile/PersonalData/ChangePassword"

const LoginPage = () => {
  return (
    <>
      <Route exact path="/sign-up" component={SignUpComponent} />
      <Route exact path="/" component={ConfirmEmailAndGenerateToken} />
    </>
  )
}

export default LoginPage
