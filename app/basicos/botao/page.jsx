"use client";
function acao1() {
  console.log("acao1");
}

export default function botao() {
  function acao2() {
    console.log("acao2");
  }

  function acao5(e) {
    console.log(e);
  }

  return (
    <div>
      <button onClick={acao1}>click1</button>
      <button onClick={acao2}>click2</button>
      <button
        onClick={function () {
          console.log("acao3");
        }}
      >
        click3
      </button>
      <button onClick={() => console.log("acao4")}>click4</button>
      <button onClick={acao5}>click5</button>
      <button onClick={(e) => acao5(e.altKey)}>click5</button>
      <div>
        <input type="text" onChange={(e) => console.log(e.target.value)} />
      </div>
    </div>
  );
}
