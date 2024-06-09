import './InfoBarShop.scss'
import React from 'react'
import axios from 'axios'
//import { LogoBar } from '../../LogoBar1/LogoBar';
import { useState, useEffect } from 'react';
export const InfoBarShop =()=>{
//---------------------------------- Online ------------------------------------
const [data, setData] = useState(null)
    useEffect(() => {
        fetch('back')
        .then(res => res.json())
        .then(res => setData(res.dragons))
    }, [])
    console.log(data)
//----------------------------------   DRG  ------------------------------------
let postData = () =>{
    let fsfs = parseInt(getValues()) + parseInt(JSON.stringify(data))
    let post = axios.post('http://localhost:3002/chatback',{
        Hunters: fsfs
    })
    console.log(fsfs)
    console.log(parseInt(JSON.stringify(data)))
}
//----------------------------------   DRG  ------------------------------------
//----------------------------------   Показ  ----------------------------------
//-------------------------------- Morphis -------------------------------------
    return(
        <div className="InfoBarShop">
            <div className="InfoBarShop1">
                <div className="InfoBarShop11">DRC:{15}</div>
                <input className="InputMorphis" type='number' id='Morphis' name='Morp' min="0" max="500" placeholder='ammount'/>
            </div>
            <div className="InfoBarShop2">
                <div className="InfoBarShop22">DRC:21</div>
                <input className="InputAlphus" id="Alphus" type='number' name='Al' min="0" max="500" placeholder='ammount'/>
                <button className='buttons' onClick={postData}>Total</button>
            </div>
        </div>
        )
}
function getValues(){
    var inputMorphis = document.getElementById("Morphis").value
    inputMorphis = parseInt(inputMorphis)
//--------------------------- Alphus ---------------------------
    var inputAlpus = document.getElementById("Alphus").value
    var Alphus = parseInt(inputAlpus)
//--------------------------- Total ----------------------------
    let ggs = inputMorphis+Alphus
    return JSON.stringify(ggs);
}