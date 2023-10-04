import MenuIcon from "@mui/icons-material/Menu";
import Close from "@mui/icons-material/Close";
import { useState } from "react";
import {Link} from 'react-router-dom'
interface ImenuMobile {
  menuItens: Array<iLink>;
}
interface iLink {
  link: string,
  name: string
}

const mobileMenu = ({ menuItens }: ImenuMobile) => {
  const [isOpen, setMenu] = useState<boolean>(false);

  const toggleMenu = (state: boolean) => {
    state ? setMenu(false) : setMenu(true);
  };

  return (
    <div className="sm:hidden">
      <button className="text-p_green" onClick={() => toggleMenu(isOpen)}>
        <MenuIcon />
      </button>
      {isOpen && (
        <div className="absolute top-0 right-0 z-50 bg-[#343A40] px-6 py-2 text-p_white flex flex-col">
          <button
            className="text-p_green self-end"
            onClick={() => toggleMenu(isOpen)}
          >
            <Close />
          </button>
          <nav className="flex flex-col">
            {menuItens.map((content) => {
              return (
                <Link key={content.name} to={content.link} className="py-1 no-underline border-b-[1px] last:border-b-0">
                  {content.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </div>
  );
};

export default mobileMenu;
