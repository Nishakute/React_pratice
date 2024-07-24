import { React, useState } from "react";

function Counter(){
    // const[count,setCount]= useState();
    const [x, setX] = useState(0);
    
    return(
        <>
        <h1>Hello</h1>
        <h1>Counteer: {x}</h1>
        <button onClick={()=>{setX(x+1)}}>Increment</button>
        <button onClick={()=>{setX(x-1)}}>Decrement</button>
        </>
    )
}
export default Counter;