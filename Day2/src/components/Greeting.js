const containerdiv = {
  backgroundColor:"black",
  color: "white",
  height:"100px"
  
}

function Greeting(props) {
  return (
    <>
      <div style={containerdiv}>
        <h3>Welcome{props.name}{props.surname}</h3>
      </div>
    </>
  );
}
export default Greeting;
