import React from "react"
import ButtonComponent from "../../../shared/Button"
import InputComponent from "../../../shared/Input"

const ConfirmEmailAndGenerateToken = () => {
  return (
    <>
      <div className="confirm-email-container">
        <div className="confirm-email-container-description">
          <p>Confirmação de email</p>
          <div className="confirm-email-container-validator">
            <span>te*******@*******.com</span>
          </div>
          <div className="confirm-email-container-input">
            <InputComponent type={"text"} placeholder={"Confirme o email"} />
          </div>
          <div className="confirm-email-container-button">
            <ButtonComponent text={"Confirmar"} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ConfirmEmailAndGenerateToken
