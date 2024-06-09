import { LogoBar} from "../LogoBar1/LogoBar";
import { ButtonBar} from "../ButtonBar1/ButtonBar";
import { Menu } from "./Menu/Menu";
import { InfoMenu } from "./InfoMenu/InfoMenu";
function Home() {
  return (
    <div className="Home">
     <LogoBar/>
     <ButtonBar/>
     <Menu/>
     <InfoMenu/>
    </div>
  );
}
export default Home;