"use client";
import Filho from "./Filho";

export default function Pai() {
  function falarComigo(param1, param2) {
    console.log(param1, param2);
  }

  return (
    <div>
      <Filho funcao={falarComigo} />
    </div>
  );
}
