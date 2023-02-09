export default function Practice(props) {
  console.log(props);
  return (
    <div style={props.styles} className="practice">
      <h1 onClick={props.click}>Hello world!</h1>
    </div>
  );
}
