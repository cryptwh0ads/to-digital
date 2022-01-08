import React from "react"

import { Link } from "react-router-dom"
import ButtonComponent from "../shared/Button"
import CheckboxComponent from "../shared/Checkbox"
import InputComponent from "../shared/Input"

const LoginComponent = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in-logo">
        <img src={"resources/images/w_logo.png"} alt="Logo" width={"360"} />
      </div>

      <div className="sign-in-form">
        <div className="sign-in-form-title">
          <p>
            Acesse <bold style={{ color: "#c6c6c6" }}>sua conta</bold>
          </p>
          <hr
            style={{
              border: "1px solid #FFD369",
              width: "132px",
              marginBottom: "32px",
            }}
          />
        </div>

        <div className="sign-in-form-inputs">
          <InputComponent type={"text"} placeholder={"E-mail"} />
          <InputComponent type={"password"} placeholder={"Senha"} />
        </div>

        <Link to="/home-board">
          <ButtonComponent text={"Entrar"} />
        </Link>
      </div>

      <div className="sign-in-remember">
        <CheckboxComponent text={"Lembrar de mim"} />
      </div>
      <div className="sign-in-footer">
        <h3>
          <Link to="/sign-up">Não possui uma conta?</Link>
        </h3>
      </div>
    </div>
  )
}

export default LoginComponent
