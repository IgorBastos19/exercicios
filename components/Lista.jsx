export default function Lista(props) {
  return (
    <div>
      <ul
        style={{
          border: "1px solid black",
          marginLeft: "auto",
          marginRight: "auto",
          fontSize: "18px",
          marginTop: "20px",
          marginBottom: "20px",
          padding: 0,
          width: "20%",
        }}
      >
        {props.children}
      </ul>
    </div>
  );
}
