import React,{useState, useEffect} from 'react'
import './InfoMenu.scss'
export const InfoMenu =()=>{
//----------------------- SEASON -----------------------
    const [data, setData] = useState(null)
    useEffect(() => {
        fetch('/back3')
        .then(res => res.json())
        .then(res => setData(res.stages))
    }, [])
    const vars = JSON.stringify(data)
    const stage = vars.substring(12, vars.length - 2)
//----------------------- STAGE ------------------------
const [data1, setData1] = useState(null)
    useEffect(() => {
        fetch('/back2')
        .then(res => res.json())
        .then(res => setData1(res.seasons))
    }, [])

//----------------------- BANK -------------------------
const [data2, setData2] = useState(null)
    useEffect(() => {
        fetch('/back1')
        .then(res => res.json())
        .then(res => setData2(res.banks))
    }, [])
    const vars2 = JSON.stringify(data2)
    const bank = vars2.substring(12, vars2.length - 2)
//*----------------------      -------------------------
    return(
        <div className="InfoMenu">
            <div className="InfoSeason">Season: {data1}</div>
            <div className="InfoStage">Stage:{data}</div>
            <div className="InfoBank">Total bank: {data2}</div>
        </div>
        )
}
/*function ClickedTop()
{
    window.location.assign('https://google.com');
}*/