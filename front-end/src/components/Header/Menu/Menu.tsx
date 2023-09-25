import MobileMenu from "./MobileMenu";

const Menu = () => {
  const menuItens = ["Home", "Nossas lojas", "Novidades", "Promoções"];

  return (
    <>
      <MobileMenu menuItens={menuItens} />
      <div className="hidden sm:flex sm:gap-4 sm:items-center">
        {menuItens.map((content) => {
          return (
            <a key={content} className="text-p_white">
              {content}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
