import React from "react"

import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faHome,
  faSearch,
  faUser,
  faHistory,
  faPlus,
} from "@fortawesome/free-solid-svg-icons"

const NavbarComponent = ({ path }) => {
  return (
    <>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="left">
            <div
              className="navbar-item-1"
              style={path === "/home-board" ? { color: "#EEE" } : null}
            >
              <Link to="/home-board">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </div>
            <div
              className="navbar-item-2"
              style={path === "/search" ? { color: "#EEE" } : null}
            >
              <Link to="/search">
                <FontAwesomeIcon icon={faSearch} />
              </Link>
            </div>
          </div>
          <div className="center">
            <div className="navbar-item-center">
              <FontAwesomeIcon icon={faPlus} />
            </div>
          </div>
          <div className="right">
            <div
              className="navbar-item-3"
              style={path === "/history" ? { color: "#EEE" } : null}
            >
              <FontAwesomeIcon icon={faHistory} />
            </div>
            <div
              className="navbar-item-4"
              style={path === "/profile" ? { color: "#EEE" } : null}
            >
              <FontAwesomeIcon icon={faUser} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavbarComponent
