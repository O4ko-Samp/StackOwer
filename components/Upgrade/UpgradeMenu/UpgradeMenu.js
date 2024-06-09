import './UpgradeMenu.scss'
import React from 'react'

export const UpgradeMenu =()=>{
//---------------------------------- Online ------------------------------------
//----------------------------------   DRG  ------------------------------------
//----------------------------------   DRG  ------------------------------------
//----------------------------------   Показ  ----------------------------------
    //-------------------------------- Morphis --------------------------------------
    return(
        <div className="InfoBarShop">
            <div className="InfoBarShop1">
                <div className="InfoBarShop11">DRC:15</div>
                <input className="InputMorphis" type='number' id='Morphis' name='Morp' min="0" max="500" placeholder='ammount'/>
            </div>
            <div className="InfoBarShop2">
                <div className="InfoBarShop22">DRC:21</div>
                <input className="InputAlphus" id="Alphus" type='number' name='Al' min="0" max="500" placeholder='ammount'/>
            </div>
        </div>
        )
}
