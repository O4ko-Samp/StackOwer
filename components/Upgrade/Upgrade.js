import { UpgradeMenu } from "./UpgradeMenu/UpgradeMenu";
import { LogoBar } from "../LogoBar1/LogoBar";
import { ButtonBar } from "../ButtonBar1/ButtonBar";

function Upgrade() {
    return (
      <div className="Shop">
        <LogoBar/>
        <ButtonBar/>
        <UpgradeMenu/>
      </div>
    );
  }
  export default Upgrade;