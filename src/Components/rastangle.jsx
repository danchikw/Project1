import React from "react";
import {useState} from "react";
import '../css/areas.css'
export default function RastangleArea () {
    const [height,setHeight]=useState('')
    const [width,setWidth]=useState('')
    const [area,setArea]=useState(null)
     const handleHeight=(event)=>{
        setHeight(event.target.value)
     }
    const handleWidth=(event)=>{
        setWidth(event.target.value)
    }
    const rastangleArea=()=>{
        const h=parseInt(height)
        const w=parseInt(width)
        const summ=h*w;
        setArea(summ)
    }
    return(
        <>
            <div className="navbar--general">
                <h2>Калькулятор площадь прямоугольник:</h2>

                <input type="number" id="height" placeholder="  Введите высоты :" onChange={handleHeight}/>
                <input type="number" id="width" placeholder=" Введите ширина :" onChange={handleWidth}/>
                <button id="answer" onClick={rastangleArea}>OK</button>
                <button id="answer">Ответ {area}</button>
            </div>
        </>
    )

}