
import MobileMenu from "./MobileMenu";
import { Link } from "react-router-dom";
interface IMenu {
  isActive: string | undefined;
  setActive: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Menu = ({isActive, setActive}: IMenu) => {
  const menuItens = [
    {
      link: "/",
      name: "Home",
    },
    {
      link: "/#",
      name: "Nossas lojas",
    },
    {
      link: "/#",
      name: "Novidades",
    },
    {
      link: "/#",
      name: "Promoções",
    },
  ];


  return (
    <>
      <MobileMenu menuItens={menuItens} />
      <div className="hidden sm:flex sm:gap-2 sm:items-center lg:gap-8">
        {menuItens.map((content) => {
          return (
            <Link
              to={content.link}
              key={content.name}
              className={` cursor-pointer hover:text-p_green text-sm  
              ${
                isActive === content.name ? "text-p_green font-bold" : "text-p_white"
              }`}
              onClick={() => setActive(content.name)}
            >
              {content.name}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
