import './LogoBar.scss'
import React, {useState, useEffect} from 'react'
import axios from 'axios';
export  const LogoBar =()=>{
//---------------------------------- Online ------------------------------------
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('back4')
        .then(res => res.json())
        .then(res => setData(res.online))
    }, [])
    console.log(data)
    //const Online = vars.substring(12, vars.length - 2)
//----------------------------------   DRG  ------------------------------------
    const [data1, setData1] = useState(null)
    useEffect(() => {
        fetch('back5')
        .then(res => res.json())
        .then(res => setData1(res.drg))
    }, [])
    //const vars1 = JSON.stringify(data1)
    //const DRG = vars1.substring(12, vars1.length - 2)
    
//----------------------------------   DRG  ------------------------------------
    const [data2, setData2] = useState(null)
    useEffect(() => {
        fetch('back6')
        .then(res => res.json())
        .then(res => setData2(res.drc))
    }, [])
   // const vars2 = JSON.stringify(data2)
    //const DRC = vars2.substring(12, vars2.length - 2)
//----------------------------------   Показ  ----------------------------------
    return(
        <div className="LogoBar">
            <div className="LogoBar_label"> Online:{data}</div>
            <div className="MenuButton" onClick={ClickedMenu}></div>
            <div className="MenuLogo"></div>
            <div className="LogoBar_info">
                <div className="LogoBar_balance1"> DRG: {data1}</div>
                <div className="LogoBar_balance2"> DRC: {data2}</div>
            </div>
        </div>
        )
}
function ClickedMenu(){
   window.location.assign("https://backend-drc.ru/")
}