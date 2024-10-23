export default function SomaUm(props) {
  // props.numero++;
  // as propriedades sao somente leitura após aprenderemos a usar formulas nas propriedades
  return (
    <div>
      <h1>{props.numero + 1}</h1>
    </div>
  );
}
