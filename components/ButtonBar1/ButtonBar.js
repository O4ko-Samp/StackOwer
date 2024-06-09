import './ButtonBar.scss'
export const ButtonBar =()=>{
    return(
        <div className="ButtonBar">
            <div className="ButtonBar_info">
                <div className="ButtonBar_top">Top</div>
                <div className="ButtonBar_shop" onClick={ClickedShop}>Shop</div>
                <div className="ButtonBar_up" onClick={ClickedUpgrade}>Upgrade</div>
            </div>
        </div>
        )
}
function ClickedShop()
{
    window.location.assign('https://backend-drc.ru/Shop');
}
function ClickedUpgrade()
{
    window.location.assign('https://backend-drc.ru/Upgrade');
}
