import React from "react";
import {useState} from "react";
 export  default function Count(){
   const [count, setCount]=useState(0)
   const [flag, setFlag]=useState(false)
    return(
        <>
            <h1>{count}</h1>
            <button
                style={{
                    background:flag ? "green":"red",
                    borderRadius:flag ?"": "5px",
                }}
                onClick={()=>{
                setCount(count+1)
                    setFlag(!flag)
            }}>Кошууу + </button>

            <button
                style={{
                    background:flag ? "red":"green",
                    borderRadius:flag ?"5px": "",
                }}
                onClick={()=>
            { if (count>0){
                setCount(count-1)}
                setFlag(!flag)
            }

            }>Кемитуу -</button>
        </>
    )
}