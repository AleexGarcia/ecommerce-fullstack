import logo from "../../assets/Logo_mobile.svg";
import SearchBox from "./SearchBox/SearchBox";
import Menu from "./Menu/Menu";
const Header = () => {
  return (
    <header className=" bg-p_black gap-2 sm:flex sm:items-center sm:px-[5%] sm:justify-between">
      <div className=" max-w-[90%] mx-auto flex items-center justify-between flex-wrap sm:flex-nowrap sm:mx-0 sm:py-4 sm:gap-4 h-[58px]">
        <div>
          <img src={logo} alt="Logo da meteora" />
        </div>
        <Menu />
      </div>
      <SearchBox />
    </header>
  );
};

export default Header;
