import React from "react";
import {useState} from "react";
import '../css/calculatoAreas.css'
import Сalculators from "./areas.jsx";
import TriangleArea from "./areasqr.jsx";
import PeriArea from "./peri.jsx";
import CalculateArea from "./calculateArea.jsx";
import FareArea from "./fareArea.jsx";
import RastangleArea from "./rastangle.jsx";
import RadiusArea from "./radiusArea.jsx";
export  default function  СalculatorsAreas() {
    const [show,setShow]=useState(false)
    const [show1,setShow1]=useState(false)
    const [show2,setShow2]=useState(false)
    const [show3,setShow3]=useState(false)
    const [show4,setShow4]=useState(false)
    const [show5,setShow5]=useState(false)
    const [show6,setShow6]=useState(false)
    return(
        <>
            <div className="divv">
                <h1>Daniel</h1>
            <section>

                <div className={"areas"}>
                    <button onClick={()=>{
                        if (show1==false&&show2==false&&show3==false&&show4==false&&show5==false&&show6==false){
                            setShow(!show)
                        }else if (show1==true)
                        {
                            setShow1(!show1)
                            setShow(!show)
                        }
                        else if (show2==true) {
                            setShow2(!show2)
                            setShow(!show)
                        }
                        else if (show3==true)
                        {
                            setShow3(!show3)
                            setShow(!show)
                        }
                        else if (show4==true)
                        {
                            setShow4(!show4)
                            setShow(!show)
                        }
                        else if (show5==true)
                        {
                            setShow5(!show5)
                            setShow(!show)
                        }
                        else if (show6==true)
                        {
                            setShow6(!show6)
                            setShow(!show)
                        }
                    }} >Калькулятор площади круга</button>
                    <button onClick={()=>{
                            if (show==false&&show2==false&&show3==false&&show4==false&&show5==false&&show6==false){
                                setShow1(!show1)
                            }
                            else if (show==true)
                            {
                                setShow1(!show1)
                                setShow(!show)
                            }
                            else if(show2==true){
                                setShow2(!show2)
                                setShow1(!show1)
                            }
                            else if (show3==true)
                            {
                                setShow3(!show3)
                                setShow1(!show1)
                            }
                            else if (show4==true)
                            {
                                setShow4(!show4)
                                setShow1(!show1)
                            }
                            else if (show5==true)
                            {
                                setShow5(!show5)
                                setShow1(!show1)
                            }
                            else if (show6==true)
                            {
                                setShow6(!show6)
                                setShow1(!show1)
                            }
                        }}>Калькулятор Периметр квадрата:</button>
                    <button onClick={()=>{
                            if (show==false&&show1==false&&show3==false&&show4==false&&show5==false&&show6==false){
                                setShow2(!show2)
                            }
                            else if (show==true)
                            {
                                setShow(!show)
                                setShow2(!show2)
                            }
                            else if (show1==true)
                            {
                            setShow1(!show1)
                            setShow2(!show2)
                            }
                            else if (show3==true)
                            {
                                setShow3(!show3)
                                setShow2(!show2)
                            }
                            else if (show4==true)
                            {
                                setShow4(!show4)
                                setShow2(!show2)
                            }
                            else if (show5==true)
                            {
                                setShow5(!show5)
                                setShow2(!show2)
                            }
                            else if (show6==true)
                            {
                                setShow6(!show6)
                                setShow2(!show2)
                            }
                        }}>Калькулятор bank :</button>
                    <button onClick={()=>{
                        if (show==false&&show1==false&&show2==false&&show4==false&&show5==false&&show6==false){
                            setShow3(!show3)
                        }else if (show==true)
                        {
                            setShow(!show)
                            setShow3(!show3)
                        }
                        else if (show1==true)
                        {
                            setShow1(!show1)
                            setShow3(!show3)
                        }
                        else if (show2==true)
                        {
                            setShow2(!show2)
                            setShow3(!show3)
                        }
                        else if (show4==true)
                        {
                            setShow4(!show4)
                            setShow3(!show3)
                        }
                        else if (show5==true)
                        {
                            setShow5(!show5)
                            setShow3(!show3)
                        }
                        else if (show6==true)
                        {
                            setShow6(!show6)
                            setShow3(!show3)
                        }
                    }}>Калькулятор площадь треугольника</button>
                    <button onClick={()=>{
                        if (show==false&&show1==false&&show2==false&&show3==false&&show5==false&&show6==false){
                            setShow4(!show4)
                        }else if (show==true)
                        {
                            setShow(!show)
                            setShow4(!show4)
                        }
                        else if (show1==true)
                        {
                            setShow1(!show1)
                            setShow4(!show4)
                        }
                        else if (show2==true)
                        {
                            setShow2(!show2)
                            setShow4(!show4)
                        }
                        else if (show3==true)
                        {
                            setShow3(!show3)
                            setShow4(!show4)
                        }
                        else if (show5==true)
                        {
                            setShow5(!show5)
                            setShow4(!show4)
                        }
                        else if (show6==true)
                        {
                            setShow6(!show6)
                            setShow4(!show4)
                        }
                    }}>Калькулятор Цельсия равны:</button>
                    <button onClick={()=>{
                        if (show==false&&show1==false&&show2==false&&show3==false&&show4==false&&show6==false){
                            setShow5(!show5)
                        }else if (show==true)
                        {
                            setShow(!show)
                            setShow5(!show5)
                        }
                        else if (show1==true)
                        {
                            setShow1(!show1)
                            setShow5(!show5)
                        }
                        else if (show2==true)
                        {
                            setShow2(!show2)
                            setShow5(!show5)
                        }
                        else if (show3==true)
                        {
                            setShow3(!show3)
                            setShow5(!show5)
                        }
                        else if (show4==true)
                        {
                            setShow4(!show4)
                            setShow5(!show5)
                        }
                        else if (show6==true)
                        {
                            setShow6(!show6)
                            setShow5(!show5)
                        }
                    }}>Калькулятор площадь прямоугольник:</button>
                    <button onClick={()=>{
                        if (show==false&&show1==false&&show2==false&&show3==false&&show4==false&&show5==false){
                            setShow6(!show6)
                        }else if (show==true)
                        {
                            setShow(!show)
                            setShow6(!show6)
                        }
                        else if (show1==true)
                        {
                            setShow1(!show1)
                            setShow6(!show6)
                        }
                        else if (show2==true)
                        {
                            setShow2(!show2)
                            setShow6(!show6)
                        }
                        else if (show3==true)
                        {
                            setShow3(!show3)
                            setShow6(!show6)
                        }
                        else if (show4==true)
                        {
                            setShow4(!show4)
                            setShow6(!show6)
                        }
                        else if (show5==true)
                        {
                            setShow5(!show5)
                            setShow6(!show6)
                        }
                    }}>Калькулятор радиус круга:</button>

                </div>
                <div className="container">
                <div style={{
                    display:show ?"block":"none"
                }}>
                    <CalculateArea/>
                </div>
                <div style={{
                    display:show1 ?"block":"none"
                }}>
                    <PeriArea/>
                </div>

                <div style={{
                    display:show2 ?"block":"none"
                }}>
                    <Сalculators/>
                </div>
                <div style={{
                    display:show3 ?"block":"none"
                }}>
                   <TriangleArea/>
                </div>

                <div style={{
                    display:show4 ?"block":"none"
                }}>
                    <FareArea/>
                </div>
                <div style={{
                    display:show5 ?"block":"none"
                }}>
                    <RastangleArea/>
                </div>


                <div style={{
                    display:show6 ?"block":"none"
                }}>
                    <RadiusArea/>
                </div>
                </div>
            </section>
            </div>
        </>
    )

}

