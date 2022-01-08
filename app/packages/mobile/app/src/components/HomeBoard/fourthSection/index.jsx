import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faClock, faCalendar, faCoins } from "@fortawesome/free-solid-svg-icons"
import Carousel, { CarouselItem } from "../../shared/Carousel"

const FourthSection = () => {
  return (
    <>
      <section className="fourth-section">
        <div className="fourth-section-title">
          <h2>
            <span>Serviços Próximos</span>
          </h2>
        </div>
        <div className="fourth-section-cards">
          <Carousel>
            <CarouselItem
              bg={
                "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"
              }
            >
              <div className="fourth-section-bg-card" style={{ zIndex: "1" }}>
                <div className="fourth-section-content">
                  <div className="fourth-section-content-wrapper">
                    <div className="fourth-section-content-item">
                      <div className="fourth-section-content-item-title">
                        <h3>
                          <span>Item 1</span>
                        </h3>
                        <div className="fourth-section-content-item-info">
                          <p style={{ marginRight: "16px" }}>
                            <FontAwesomeIcon icon={faCoins} /> Mercado, Compras
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem
              bg={
                "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1024&q=80"
              }
            >
              <div className="fourth-section-bg-card" style={{ zIndex: "1" }}>
                <div className="fourth-section-content">
                  <div className="fourth-section-content-wrapper">
                    <div className="fourth-section-content-item">
                      <div className="fourth-section-content-item-title">
                        <h3>
                          <span>Item 1</span>
                        </h3>
                        <div className="fourth-section-content-item-info">
                          <p style={{ marginRight: "16px" }}>
                            <FontAwesomeIcon icon={faCoins} /> Mercado, Compras
                          </p>
                        </div>
                      </div>
                    </div>
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

export default FourthSection
