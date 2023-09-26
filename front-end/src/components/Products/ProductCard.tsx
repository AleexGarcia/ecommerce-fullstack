interface IProductCard {
  url: string;
  alt: string;
  name: string;
  description: string;
  price: number;
}

const ProductCard = ({ url, alt, name, description, price }: IProductCard) => {
  return (
    <figure className="grid grid-rows-[2fr 1fr] sm:w-[47.5%] lg:w-[30%]">
      <img src={url} alt={alt} />
      <figcaption className="p-2 flex flex-col gap-4">
        <span className="font-bold">{name}</span>
        <p>{description}</p>
        <span className="font-bold">
          {new Intl.NumberFormat("pt-br",{ style: 'currency', currency: 'BRL' }).format(price)}
        </span>
        <button className="button self-start ">Ver mais</button>
      </figcaption>
    </figure>
  );
};

export default ProductCard;
