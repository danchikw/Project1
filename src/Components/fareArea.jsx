import React from "react";
import {useState} from "react";
import '../css/areas.css'
export default function FareArea () {
    const [tem,setTem]=useState('')
    const [area,setArea]=useState(null)

    const handleTem=(event)=>{
        setTem(event.target.value)
    }
    const fareAr=()=>{
        const temm=parseInt(tem)
        const sum =((9/5)*(tem)+32)
        setArea(sum)
    }
    return(
        <>
            <div className="navbar--general">
                <h2>Калькулятор Цельсия равны:</h2>
                <input type="number" id="tem" placeholder="   Введите температуру :" onChange={handleTem}/>

                <button id="answer" onClick={fareAr}>OK</button>
                <button id="answer" >Ответ {area}</button>
            </div>
        </>
    )

}