import './Menu.scss'
import React,{useState, useEffect} from 'react';
import axios from 'axios';
export const Menu =()=>{
    const ClickedInfo = () =>{
       alert('Данный вид драконов являются основными, увеличивая их количество вы будете увеличивать и производство Яиц!')
    }
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('back')
        .then(res => res.json())
        .then(res => setData(res.dragons))
    }, [])
    //const vars = JSON.stringify(data)
    //const newStr = vars.substring(12, vars.length - 2)
    return(
        <div className="Menu">
            <div className="Info_Bar" onClick={ClickedInfo}></div>
            <div className="Dragons">Dragon dynasty: {data}</div>
            <div className="Info"> The main inhabitants of the village</div>
        </div>
        )
}