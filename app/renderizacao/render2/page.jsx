import listaProdutos from "../../../data/listaProdutos";
export default function repeticao2() {
  function renderizarLinhas() {
    return listaProdutos.map((produto, i) => (
      <tr key={i}>
        <td>{produto.id}</td>
        <td>{produto.nome}</td>
        <td>{produto.preco}</td>
      </tr>
    ));
  }

  return (
    <div>
      <table
        style={{
          border: "1px solid black",
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center",
          fontSize: "18px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <thead
          style={{
            backgroundColor: "#f2f2f2",
            borderBottom: "1px solid black",
          }}
        >
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{renderizarLinhas()}</tbody>
      </table>
    </div>
  );
}
