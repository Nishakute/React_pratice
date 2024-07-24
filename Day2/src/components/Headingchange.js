import {useState} from "react";

function Headingchange(){
    const[heading,changeheading]=useState('hello world')

    const handleClick=()=>{
        changeheading('Hello React')
    }
    return(
        <>
        <h2>{heading}</h2>
        <button onClick={handleClick}>click me to chnage heading</button>
        
        </>
    )

}
export default Headingchange;
