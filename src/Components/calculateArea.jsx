import React from "react";
import {useState} from "react";
import '../css/areas.css'
export default function  CalculateArea () {
    const [rad,setR]=useState('')
    const [area,setArea]=useState('')
    const handleR=(event)=>{
        setR(event.target.value)
    }
    const calculeArea=()=>{
        const r=parseInt(rad)
        const sum=r*r*3.14;
        setArea(sum)
    }
    return(
        <>
            <div className="navbar--general">
                <h2>Калькулятор площади круга</h2>
                <input type="number" id="input" onChange={handleR} placeholder="    Радиус круга:"/>
                <button  id="answer" onClick={calculeArea}>OK</button>
                <button  id="answer" >Ответ {area}</button>
            </div>
        </>
    )

}