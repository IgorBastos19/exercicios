import Estilo from "../../../components/Estilo";

export default function usandoEstilo() {
  return (
    <div>
      <Estilo numero={-1} direita color="white" />
      <Estilo numero={0} />
      <Estilo numero={1} direita color="blue" />
    </div>
  );
}
