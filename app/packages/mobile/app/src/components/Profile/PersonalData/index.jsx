import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faPhone,
  faEnvelope,
  faLock,
  faUser,
  faCameraRetro,
  faCamera,
} from "@fortawesome/free-solid-svg-icons"
import InputComponent from "../../shared/Input"
import { Link } from "react-router-dom"

const PersonalDataComponent = () => {
  return (
    <>
      <div className="personal-data-container">
        <div className="personal-data-header">
          <div className="personal-data-image-edit">
            <FontAwesomeIcon icon={faCamera} />
          </div>
          <img
            src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
            alt="profile"
            width={320}
            height={260}
          />
        </div>
        <div className="personal-data-container-content">
          <div className="personal-data-container-content-name">
            <h2>
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <InputComponent type={"text"} placeholder={"Nome"} />
            </h2>
          </div>
          <div className="personal-data-container-content-email">
            <h2>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <InputComponent type={"email"} placeholder={"E-mail"} />
            </h2>
          </div>
          <div className="personal-data-container-content-phone">
            <h2>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <InputComponent type={"text"} placeholder={"Telefone"} />
            </h2>
          </div>
          <Link to={"/edit-profile"}>
            <div className="personal-data-container-content-password">
              <h2>
                <span>
                  <FontAwesomeIcon icon={faLock} />
                </span>
                <button type="button">Alterar senha</button>
              </h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default PersonalDataComponent
