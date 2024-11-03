"use client";
import { useState } from "react";
import ContadorDisplay from "../../../components/ContadorDisplay";

export default function contador() {
  const estilo = {
    backgroundColor: "green",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "white",
  };

  const arrayNumero = useState(0);
  let Numero = arrayNumero[0];
  const alterarNumero = arrayNumero[1];

  function quandoClicarMais() {
    alterarNumero(Numero + 1);
  }

  function quandoClicarMenos() {
    alterarNumero(Numero - 1);
  }

  return (
    <div style={estilo}>
      <div
        style={{
          backgroundColor: "white",
          padding: "50px",
          borderRadius: "5px",
          color: "black",
          textAlign: "center",
        }}
      >
        <h1>Contador</h1>
        <ContadorDisplay Numero={Numero} />
        <div
          style={{
            flexDirection: "row",
          }}
        >
          <button
            style={{
              marginRight: "10px",
            }}
            onClick={quandoClicarMais}
          >
            +
          </button>
          <button onClick={quandoClicarMenos}>-</button>
        </div>
      </div>
    </div>
  );
}
