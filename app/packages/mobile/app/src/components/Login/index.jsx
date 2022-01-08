import React from "react"

import { Link } from "react-router-dom"

const LoginComponent = () => {
  return (
    <div className="sign-in-container">
      <div className="sign-in-logo">
        <img src={"resources/images/w_logo.png"} alt="Logo" width={"360"} />
      </div>

      <div className="sign-in-form">
        <div className="sign-in-form-title">
          <p>Acesse sua conta</p>
          <hr
            style={{
              border: "1px solid yellow",
              width: "72px",
              marginBottom: "32px",
            }}
          />
        </div>

        <div className="sign-in-form-inputs">
          <input
            type={"email"}
            placeholder={"E-mail"}
            className="sign-in-form-input"
          />
          <input
            type={"password"}
            placeholder={"Senha"}
            className="sign-in-form-input"
          />
        </div>

        <button type="button" className="sign-in-form-button">
          {" "}
          Login{" "}
        </button>
      </div>

      <div className="sign-in-remember-me">
        <input type="checkbox" />
        <p>Lembrar-me</p>
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
