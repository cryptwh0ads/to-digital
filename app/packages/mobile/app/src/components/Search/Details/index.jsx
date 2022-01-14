import {
  faChevronRight,
  faCoins,
  faDollarSign,
  faMapMarkerAlt,
  faNewspaper,
  faPhone,
  faSearchDollar,
  faStar,
  faTag,
  faUser,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const DetailsComponent = () => {
  return (
    <>
      <div className="search-details-container">
        <div className="search-details-container-header">
          <div className="search-details-container-title">
            <span>Detalhes sobre: Estabelecimento 1</span>
          </div>
          <div className="search-details-container-subtitle">
            <span>
              <FontAwesomeIcon icon={faCoins} />
              Mercado, Compras
            </span>
          </div>

          <div className="search-details-container-image">
            <div className="search-details-container-image-filter" />
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"
              alt="Estabelecimento 1"
            />
          </div>

          <div className="search-details-container-rate">
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

        <div className="search-details-container-body">
          <div className="search-details-container-body-item">
            <div className="search-details-container-body-item-title">
              <span>
                <FontAwesomeIcon icon={faNewspaper} /> Descrição
              </span>
              <p>Excelentes preços e descontos diários</p>
            </div>
          </div>

          <div className="search-details-container-body-item">
            <div className="search-details-container-body-item-title">
              <span>
                <FontAwesomeIcon icon={faPhone} /> Telefone
              </span>
              <p>(11) 9 9999-9999</p>
            </div>
          </div>

          <div className="search-details-container-body-item">
            <div className="search-details-container-body-item-title">
              <span>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Endereço
              </span>
              <p>Av. Teste testado</p>
            </div>
          </div>

          <div className="search-details-container-body-button">
            <button
              type="button"
              className="search-details-container-body-button-title"
            >
              <span>
                Consultar catálogo de preços{" "}
                <FontAwesomeIcon icon={faChevronRight} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default DetailsComponent
