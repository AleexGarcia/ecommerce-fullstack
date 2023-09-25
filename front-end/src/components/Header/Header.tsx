
import PositionedMenu from "./PositionedMenu/PositionedMenu";
import logo from '../../assets/Logo_mobile.svg'
const Header = () => {
  return (
    <header className="flex items-center justify-between bg-p_black">
      <div>
        <img src={logo} alt="Logo da meteora" />
      </div>
      <PositionedMenu />
    </header>
  );
};

export default Header;
