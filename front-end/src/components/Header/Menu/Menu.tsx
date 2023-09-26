import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Menu = () => {
  const menuItens = ["Home", "Nossas lojas", "Novidades", "Promoções"];
  const [isActive, setActive] = useState<undefined | string>();

  return (
    <>
      <MobileMenu menuItens={menuItens} />
      <div className="hidden sm:flex sm:gap-4 sm:items-center lg:gap-8">
        {menuItens.map((content) => {
          return (
            <a
              key={content}
              className={` cursor-pointer hover:text-p_green  
              ${isActive === content ? "text-p_green font-bold" :"text-p_white"}`}
              onClick={()=> setActive(content)}
            >
              {content}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
