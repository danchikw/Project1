import React from "react";
import {useState} from "react";
import '../css/areas.css'
export default function  RadiusArea(){
    const [are,setAre]=useState('')
    const [area,setArea]=useState(null)
    const handleAre=(event)=>{
        setAre(event.target.value)
    }
    const radiusArea=()=>{
        const a=parseInt(are)
        const summ=(a/3.14);
        setArea(summ)
    }
    return(
        <>
        <div className="navbar--general">

            <h2>Калькулятор радиус круга:</h2>

            <input type="number" id="area"  placeholder="Введите плошадь :" onChange={handleAre}/>
            <button id="answer"  type="submit" onClick={radiusArea} >OK</button>
            <button id="answer">Ответ {area}</button>
        </div>
        </>)
}