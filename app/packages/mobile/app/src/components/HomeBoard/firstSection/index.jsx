import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

const FirstSection = () => {
  return (
    <section className="first-section">
      <div className="first-section-wrapper">
        <div className="first-section-content">
          <h1>
            <span> Olá, Visitante </span>
          </h1>
          <p>
            <span>
              {" "}
              Localização Atual <FontAwesomeIcon icon={faChevronDown} />{" "}
            </span>
          </p>
        </div>
        <div className="first-section-image">
          <img
            src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=96&q=80"
            alt="Profile image"
            width={96}
            height={96}
          />
        </div>
      </div>
    </section>
  )
}

export default FirstSection
