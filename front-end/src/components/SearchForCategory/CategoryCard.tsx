interface ICategoryCard {
    url:string
    content: string
    alt: string
}


const CategoryCard = ({url,content,alt}:ICategoryCard) => {
    return(
        <figure className="bg-p_green grid grid-rows-[82%,18%] w-[45%] sm:w-[30%] lg:w-[15%] lg:min-h-[192px]">
            <img src={url} alt={alt} />
            <figcaption className="bg-p_black text-center">
                <span className="text-p_white">{content}</span>
            </figcaption>
        </figure>
    );
}

export default CategoryCard;