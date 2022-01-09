import React from "react"
import TopBarComponent from "../Topbar"

import FooterComponent from "./Footer"

const LayoutComponent = (props) => {
  return (
    <>
      <header>
        {props.location.pathname === "/" ||
        props.location.pathname === "/sign-up" ||
        props.location.pathname === "/home-board" ? null : (
          <TopBarComponent path={props.location.pathname} />
        )}
        {/* <TopBarComponent path={props.location.pathname} /> */}
      </header>
      <main>{props.children}</main>
      <footer>
        {props.location.pathname === "/" ||
        props.location.pathname === "/sign-up" ? null : (
          <FooterComponent path={props.location.pathname} />
        )}
        {/* <FooterComponent path={props.location.pathname} /> */}
      </footer>
    </>
  )
}

export default LayoutComponent
