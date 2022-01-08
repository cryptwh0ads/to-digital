import React from "react"

import FooterComponent from "./Footer"

const LayoutComponent = (props) => {
  return (
    <>
      <main>{props.children}</main>
      <footer>
        {props.location.pathname === "/" ||
        props.location.pathname === "/sign-up" ? null : (
          <FooterComponent />
        )}
        {/* <FooterComponent /> */}
      </footer>
    </>
  )
}

export default LayoutComponent
