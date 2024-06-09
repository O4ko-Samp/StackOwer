import { InfoBarShop } from "./InfoBarShop/InfoBarShop";
import { LogoBar } from "../LogoBar1/LogoBar";
import { ButtonBar } from "../ButtonBar1/ButtonBar";

function Shop() {
    return (
      <div className="Shop">
        <LogoBar/>
        <ButtonBar/>
        <InfoBarShop/>
      </div>
    );
  }
  export default Shop;