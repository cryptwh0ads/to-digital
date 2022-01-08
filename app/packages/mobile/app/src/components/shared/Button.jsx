import React from "react"

const ButtonComponent = ({ text }) => {
  return (
    <>
      <button type="button" className="custom-button">
        {" "}
        {text}{" "}
      </button>
    </>
  )
}

export default ButtonComponent
