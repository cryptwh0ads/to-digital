import React from "react"

const TopBarComponent = ({ path }) => {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar-left">
          <div
            className="top-bar-title"
            style={{
              color: "#EEE",
              fontSize: "21px",
              margin: "20px",
              fontWeight: "800",
            }}
          >
            <span>
              {path === "/search"
                ? "Encontre o serviço mais próximo"
                : path === "/history"
                ? "Histórico dos agendamentos"
                : path === "/edit-profile"
                ? "Editar perfil"
                : path === "/change-password/generate-token"
                ? "Confirmar Email"
                : "Confirmar Email"}
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default TopBarComponent
