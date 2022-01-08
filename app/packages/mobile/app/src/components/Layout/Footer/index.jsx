import React from "react"
import NavbarComponent from "../../Navbar"

const FooterComponent = ({ path }) => {
  return (
    <footer>
      <NavbarComponent path={path} />
    </footer>
  )
}

export default FooterComponent
