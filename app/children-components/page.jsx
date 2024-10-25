import Item from "../../components/Item";
import Lista from "../../components/Lista";

export default function childrenComponents() {
  return (
    <div>
      <Lista>
        <Item conteudo="Item #1" />
        <Item conteudo="Item #2" />
        <Item conteudo="Item #10" />
        <Item conteudo="Item #12" />
      </Lista>
    </div>
  );
}
