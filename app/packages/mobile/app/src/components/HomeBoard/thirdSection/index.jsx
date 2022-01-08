import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faCalendar } from "@fortawesome/free-solid-svg-icons"
import React from "react"

import Carousel, { CarouselItem } from "./carrousel"

const ThirdSection = () => {
  return (
    <>
      <section className="third-section">
        <div className="third-section-title">
          <h2>
            <span>Meus Agendamentos</span>
          </h2>
        </div>

        <div className="third-section-cards">
          <Carousel>
            <CarouselItem>
              <div className="third-section-content">
                <div className="third-section-content-wrapper">
                  <div className="third-section-content-item">
                    <div className="third-section-content-item-image">
                      <img
                        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=96&q=80"
                        alt="Agendamento image"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="third-section-content-item-title">
                      <h3>
                        <span>Item 1</span>
                      </h3>
                      <div className="third-section-content-item-info">
                        <p style={{ marginRight: "16px" }}>
                          <FontAwesomeIcon icon={faClock} /> 10:00
                        </p>
                        <p>
                          <FontAwesomeIcon icon={faCalendar} /> 15/01
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="third-section-content-item-actions">
                    <button
                      className="third-section-content-item-actions-button"
                      type="button"
                    >
                      Remarcar
                    </button>
                    <button
                      className="third-section-content-item-actions-button"
                      type="button"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem>
              <div className="third-section-content">
                <div className="third-section-content-wrapper">
                  <div className="third-section-content-item">
                    <div className="third-section-content-item-image">
                      <img
                        src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=96&q=80"
                        alt="Agendamento image"
                        width={64}
                        height={64}
                      />
                    </div>
                    <div className="third-section-content-item-title">
                      <h3>
                        <span>Item 2</span>
                      </h3>
                      <div className="third-section-content-item-info">
                        <p style={{ marginRight: "16px" }}>
                          <FontAwesomeIcon icon={faClock} /> 10:00
                        </p>
                        <p>
                          <FontAwesomeIcon icon={faCalendar} /> 15/01
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="third-section-content-item-actions">
                    <button
                      className="third-section-content-item-actions-button"
                      type="button"
                    >
                      Remarcar
                    </button>
                    <button
                      className="third-section-content-item-actions-button"
                      type="button"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </section>
    </>
  )
}

export default ThirdSection
