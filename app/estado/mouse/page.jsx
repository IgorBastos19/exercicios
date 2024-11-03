"use client";
import { useState } from "react";
export default function mouse() {
  const [x, alterarX] = useState(0);

  const arrayY = useState(0);
  let y = arrayY[0];
  const alterarY = arrayY[1];

  const estilo = {
    backgroundColor: "green",
    display: "flex",
    flexDirection: "column",

    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    color: "white",
  };

  function quandoMover(ev) {
    alterarX(ev.clientX);
    alterarY(ev.clientY);
  }

  return (
    <div style={estilo} onMouseMove={quandoMover}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  );
}
