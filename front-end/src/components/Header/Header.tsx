import logo from "../../assets/Logo_mobile.svg";
import SearchBox from "./SearchBox/SearchBox";
import Menu from "./Menu/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";
const Header = () => {
  const [isActive, setActive] = useState<undefined | string>();

  return (
    <header className=" bg-p_black gap-2 sm:flex sm:items-center sm:px-[5%] sm:justify-between">
      <div className=" max-w-[90%] mx-auto flex items-center justify-between flex-wrap sm:flex-nowrap sm:mx-0 sm:py-4 sm:gap-2 h-[10vh]">
        <div className="sm:w-[25%]">
          <img src={logo} alt="Logo da meteora" />
        </div>
        <Link
          onClick={() => setActive("login")}
          className="button sm:hidden"
          to={"/auth/signin"}
        >
          Login
        </Link>
        <Menu isActive={isActive} setActive={setActive} />
      </div>
      <SearchBox />
      <Link
        onClick={() => setActive("login")}
        className="button hidden sm:block"
        to={"/auth/signin"}
      >
        Login
      </Link>
    </header>
  );
};

export default Header;
