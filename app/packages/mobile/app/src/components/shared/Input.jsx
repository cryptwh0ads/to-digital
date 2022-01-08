import React from "react"

const InputComponent = ({ type, placeholder }) => {
  return (
    <>
      <input type={type} placeholder={placeholder} className="custom-input" />
    </>
  )
}

export default InputComponent
