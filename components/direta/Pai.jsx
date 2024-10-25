import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <h1>Família {props.familia}</h1>
      <Filho nome="Lucinea-" familia={props.familia} />
      <Filho nome="Igor-" familia={props.familia} />
      <Filho nome="Lucca-" familia={props.familia} />
      <Filho {...props} nome="Marilane-" />
    </div>
  );
}
