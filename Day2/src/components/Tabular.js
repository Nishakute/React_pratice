import React,{useState} from "react";

function Tabular(){
    const [data,setdata] = useState(0);


    const content=[['apple','banana','mango'],
                   ['potato','bringal','tomato'],
              ['rose','lotus','lilly']]

    return(
        <>
        <button onClick={()=>setdata(0)}>fruits</button>
        <button onClick={()=>setdata(1)}>Vegetables</button>
        <button onClick={()=>setdata(2)}>Flowers</button>

    <ul>
        {content[data].map((elem,index)=>(
            
            <li key={index}>{elem}</li>
        ))}
    </ul>
</>
    )
}


export default Tabular;