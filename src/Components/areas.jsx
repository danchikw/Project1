import React from "react";
import {useState} from "react";
import '../css/areas.css'

export  default function  Сalculators() {
    const [p,setP]=useState('');
    const [r,setR]=useState('');
    const [t,setT]=useState('');
    const [area,setArea]=useState('');
    const handleP=(event)=>{
        setP(event.target.value)
    }
    const handleR=(event)=>{
        setR(event.target.value)
    }
    const handleT=(event)=>{
        setT(event.target.value)
    }
    const areaBank=()=>{
        const sum=((p*r*t)/100);
        setArea(sum);
    }

    return(
        <>

                <div className="navbar--general">
                    <h2>Калькулятор bank :</h2>

                    <input type="number" id="p" placeholder=" Начальная сумма :"  onChange={handleP}/>
                    <input type="number" id="r" placeholder=" Процент по вкладку :" onChange={handleR}/>
                    <input type="number" id="t" placeholder="Количества лет :" onChange={handleT}/>

                    <button id="answer" onClick={areaBank} >OK</button>
                    <button id="answer">Ответ {area}</button>
                </div>


        </>
    )

}
