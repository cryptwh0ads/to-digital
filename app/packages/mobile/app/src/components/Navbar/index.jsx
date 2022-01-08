import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faSearch,
  faUser,
  faHistory,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"

const NavbarComponent = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="left">
            <div className="navbar-item-1">
              <FontAwesomeIcon icon={faHome} />
            </div>
            <div className="navbar-item-2">
              <FontAwesomeIcon icon={faSearch} />
            </div>
          </div>
          <div className="center">
            <div className="navbar-item-center">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className="right">
            <div className="navbar-item-3">
              <FontAwesomeIcon icon={faHistory} />
            </div>
            <div className="navbar-item-4">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarComponent
