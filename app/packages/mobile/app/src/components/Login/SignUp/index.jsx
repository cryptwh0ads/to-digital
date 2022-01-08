import React, { useState } from "react"

import InputComponent from "../../shared/Input"
import ButtonComponent from "../../shared/Button"

import { Link } from "react-router-dom"

const SignUpComponent = () => {
  const [checkboxIsSelected, setCheckboxIsSelected] = useState(false)

  return (
    <div className="sign-up-container">
      <div className="sign-up-logo">
        <img src={"resources/images/w_logo.png"} alt="Logo" width={"360"} />
      </div>

      <div className="sign-up-form">
        <div className="sign-up-form-title">
          <p>
            Crie <bold style={{ color: "#c6c6c6" }}>sua conta</bold>
          </p>
          <hr
            style={{
              border: "1px solid yellow",
              width: "72px",
              marginBottom: "32px",
            }}
          />
        </div>

        <div className="sign-up-account-type">
          <p>Tipo de conta</p>
          <div className="sign-up-account-type-options">
            <p
              style={checkboxIsSelected === false ? { color: "#ffd700" } : null}
            >
              Usuário
            </p>
            <label className="switch-type-account">
              <input
                type="checkbox"
                value={checkboxIsSelected}
                checked={checkboxIsSelected}
                onChange={() => setCheckboxIsSelected(!checkboxIsSelected)}
              />
              <span className="slider round"></span>
            </label>
            <p
              style={checkboxIsSelected === true ? { color: "#ffd700" } : null}
            >
              Empresa
            </p>
          </div>
        </div>

        <div className="sign-up-form-inputs">
          <InputComponent type={"text"} placeholder={"Nome Completo"} />
          {/* {checkboxIsSelected === true ? (
            <InputComponent type={"text"} placeholder={"Nome da Empresa"} />
          ) : null} */}
          <InputComponent type={"text"} placeholder={"Telefone"} />

          <InputComponent type={"email"} placeholder={"E-mail"} />
          <InputComponent type={"password"} placeholder={"Senha"} />
        </div>

        <ButtonComponent text={"Registrar"} />
      </div>

      <div className="sign-up-footer">
        <h3>
          <Link to="/">
            Já possui uma conta? <code>Faça login</code>
          </Link>
        </h3>
      </div>
    </div>
  )
}

export default SignUpComponent
