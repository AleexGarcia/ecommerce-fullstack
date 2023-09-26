interface IAboutCard {
    url: string
    alt: string
    title: string
    content: string
}

const AboutCard = ({url,alt,title,content}: IAboutCard) => {
    return(
        <div className="grid grid-cols-[auto,1fr] gap-4">
            <img src={url} alt={alt} />
            <div>
                <span className="text-p_green text-2xl">{title.toUpperCase()}</span>
                <p className="text-sm mt-2">{content}</p>
            </div>
        </div>
    )
}

export default AboutCard;