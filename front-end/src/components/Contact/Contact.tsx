const Contact = () => {
  return (
    <section className="bg-white max-w-[90%] mx-auto py-8 lg:py-16">
      <div className="py-6 px-4 border border-p_black text-center sm:mx-auto sm:max-w-[690px] lg:max-w-[729px]">
        <p className="font-semibold sm:max-w-[83%] sm:mx-auto lg:max-w-[93%]" >
          Quer receber nossas novidades, promoções exclusivas e 10% OFF na
          primeira compra? Cadastre-se!
        </p>
        <div className="flex flex-row items-center mt-8 sm:max-w-[64%] sm:mx-auto lg:max-w-[74%]">
          <input className="px-4 py-2 border border-p_black sm:flex-grow" id="email" name="email" type="email" placeholder="Digite seu email!" />
          <button className="button flex-grow sm:flex-grow-0">Enviar</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
