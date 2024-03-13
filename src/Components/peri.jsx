import React from "react";
import {useState} from "react";
import '../css/areas.css'
export  default function PeriArea() {
    const [as,setA]=useState('')
    const [ba,setB]=useState('')
    const [area,setArea]=useState('')
    const handleA=(event)=>{
        setA(event.target.value)
    }
    const handleB=(event)=>{
        setB(event.target.value)
    }
    const periArea=()=>{
        const a=parseInt(as)
        const b=parseInt(ba)
        const  sum=(a+b)*2
        setArea(sum)
    }
    return(
        <>
            <div className="navbar--general">
                <h2>Калькулятор Периметр квадрата:</h2>
                <input type="number" id="a" placeholder=" Ширина квадрата:" onChange={handleA}/>
                <input type="number" id="b"placeholder=" Высота квадрата:" onChange={handleB}/>

                <button id="answer" onClick={periArea}>OK</button>
                <button id="answer">Ответ {area}</button>
            </div>
        </>
    )

}