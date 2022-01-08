import React from "react"

const CheckboxComponent = ({ text }) => {
  return (
    <label className="custom-checkbox">
      Lembrar de mim
      <input type="checkbox" />
      <span className="custom-checkMark"></span>
    </label>
  )
}

export default CheckboxComponent
