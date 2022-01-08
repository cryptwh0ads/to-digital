import React, { useEffect, useState } from "react"
import { useSwipeable } from "react-swipeable"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

export const CarouselItem = ({ children, width, bg }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {bg ? (
        <img
          src={bg}
          alt="Carousel item background"
          style={{
            width: "100%",
            objectFit: "cover",
            zIndex: "0",
            position: "absolute",
          }}
        />
      ) : null}
      {children}
    </div>
  )
}

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0
    }

    setActiveIndex(newIndex)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
  })

  return (
    <div className="carousel-wrapper">
      <div className="carousel-navigation">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => updateIndex(activeIndex - 1)}
        />
      </div>
      <div {...handlers} className="carousel">
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" })
          })}
        </div>
      </div>
      <div className="carousel-navigation">
        <FontAwesomeIcon
          icon={faChevronRight}
          onClick={() => updateIndex(activeIndex + 1)}
        />
      </div>
    </div>
  )
}

export default Carousel
