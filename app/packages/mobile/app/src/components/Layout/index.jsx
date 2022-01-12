import React from "react"
import TopBarComponent from "../Topbar"

import FooterComponent from "./Footer"

const LayoutComponent = (props) => {
    
  const { pathname } = props.location

  return (
    <>
      <header>
        {pathname === "/" ||
        pathname === "/sign-up" ||
        pathname === "/home-board" ? null : (
          <TopBarComponent path={pathname} />
        )}
        {/* <TopBarComponent path={pathname} /> */}
      </header>
      <main>{props.children}</main>
      <footer>
        {pathname === "/" ||
        pathname === "/sign-up" ? null : (
          <FooterComponent path={pathname} />
        )}
        {/* <FooterComponent path={pathname} /> */}
      </footer>
    </>
  )
}

export default LayoutComponent
