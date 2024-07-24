import { useState } from "react";


function Calculator(){

    const[input1,setinput1]=useState(0);
    const[input2,setinput2]=useState(0);
    const[result,setresult]=useState(0);





    return(
        <>

        <div className="calculator">
        <input type="number" placeholder="enter input1" onChange={(e)=>setinput1(e.target.value)}></input>
        <input type="number" placeholder="enter input2"onChange={(e)=>setinput2(e.target.value)} ></input>
        <div>
            <h2>Result:{result}</h2>
        </div>
        <button onClick={()=>setresult(Number(input1)+Number(input2))}>+</button>
        <button onClick={()=>setresult(Number(input1)-Number(input2))}>-</button>
        <button onClick={()=>setresult(Number(input1)*Number(input2))}>*</button>
        <button onClick={()=>setresult(Number(input1)/Number(input2))}>/</button>
        
        </div>
        </>

    )

}



export default Calculator;