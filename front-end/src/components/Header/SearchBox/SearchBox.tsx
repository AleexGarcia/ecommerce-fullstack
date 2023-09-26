const SearchBox = () => {
  return (
    <div className="bg-white sm:bg-inherit sm:p-0 sm:min-w-[150px] sm:max-w-[250px] h-[15vh] py-4 w-full sm:h-auto">
      <form className="items-center flex justify-between gap-2 py-2 max-w-[90%] mx-auto ">
        <input className="flex-grow px-2 py-1 outline-none border border-p_black sm:border-p_white text-sm sm:w-16" placeholder="Digite o produto" type="text" />
        <button  className="px-2 py-1 text-sm bg-transparent border border-p_black sm:border-p_white sm:text-p_white font-semibold">Buscar</button>
      </form>
    </div>
  );
};

export default SearchBox;
