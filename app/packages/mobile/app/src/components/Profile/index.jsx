import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import {
  faEnvelope,
  faStar,
  faUser,
  faNewspaper,
  faChevronRight,
  faPhone,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons"

const ProfileComponent = () => {
  return (
    <>
      <div className="profile-container">
        <div className="profile-logo">
          <img src={"resources/images/w_logo.png"} alt="Logo" width={"320"} />
        </div>
        <div className="profile-header">
          <div className="profile-header-card">
            <div className="profile-header-card-image">
              <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                alt="Profile image"
              />
            </div>
            <div className="profile-header-card-info">
              <div className="profile-header-card-info-name">
                <h1>John Doe</h1>
              </div>
              <div className="profile-header-card-info-email">
                <h2>
                  <span>
                    <FontAwesomeIcon icon={faEnvelope} />
                  </span>
                  <p>admin@to.digital</p>
                </h2>
              </div>
              <div className="profile-header-card-info-phone">
                <h2>
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                  <p>+55 (11) 99999-9999</p>
                </h2>
              </div>

              <div className="profile-header-card-info-rate">
                <h2>
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faStar} />
                  </span>

                  <p>
                    0 <FontAwesomeIcon icon={faUser} />
                  </p>
                </h2>
              </div>
            </div>
          </div>
        </div>

        <div className="profile-content-cards">
          <div className="profile-content-card">
            <div className="profile-content-card-icon">
              <FontAwesomeIcon icon={faNewspaper} />
            </div>
            <div className="profile-content-card-info">
              <h2>
                <span>Dados Pessoais</span>
              </h2>
            </div>
            <div className="profile-content-card-access">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>

          {/* If is Enterprise Account type, able this card */}
          <div className="profile-content-card">
            <div className="profile-content-card-icon">
              <FontAwesomeIcon icon={faBuilding} />
            </div>
            <div className="profile-content-card-info">
              <h2>
                <span>Meus Estabelecimentos</span>
              </h2>
            </div>
            <div className="profile-content-card-access">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileComponent
