import React from "react";
import {useState} from "react";
import '../css/areas.css'
export  default function TriangleArea (){
    const [height,setHeight]=useState('')
    const [os,setOs]=useState('')
    const [area,setArea]=useState('')

    const handleHeight=(event)=>{
        setHeight(event.target.value)
    }
    const handleOs=(event)=>{
        setOs(event.target.value)
    }
    const triangleSumm=()=>{
        const sum=(0.5*height*os)
        setArea(sum)
    }

    return(
        <>
            <div className="navbar--general">
                <h2>Калькулятор площадь треугольника</h2>
                <input type="number" id="he" placeholder="   Высота ::" onChange={handleHeight}/>
                <input type="number" id="os" placeholder=" Основание:" onChange={handleOs}/>

                <button  id="answer" onClick={triangleSumm}>OK</button>
                <button id="answer">Ответ {area}</button>
            </div>
        </>
    )
}