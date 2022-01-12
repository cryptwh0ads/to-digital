import React from "react"

import { Route } from "react-router-dom"

import ProfileComponent from "../../components/Profile"
import PersonalDataComponent from "../../components/Profile/PersonalData"

const ProfilePage = () => {
  return (
    <>
      <Route exact path="/edit-profile" component={PersonalDataComponent} />
      <Route exact path="/profile" component={ProfileComponent} />
    </>
  )
}

export default ProfilePage
