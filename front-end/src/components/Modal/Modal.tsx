import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
interface Product {
  url: string;
  alt: string;
  name: string;
  description: string;
  price: number;
  size: Array<string>;
  varient: Array<string>;
  store: string;
  delivery: string;
}

interface IModal {
  title: string;
  content: Product | string;
}

const Modal = ({ title, content }: IModal) => {
  return (
    <div>
      <div className="bg-p_black">
        <CheckCircleOutlineIcon />
        <h3>{title}</h3>
        <button>
          <CloseIcon />
        </button>
      </div>
      <div>
        {typeof content === "string" ? (
          <p>{content}</p>
        ) : (
          <div className="grid grid-rows-[auto,auto] sm:grid-rows-[auto] sm:grid-cols-[1fr auto] p-4 gap-2">
            <img src={content.url} alt={content.alt} />
            <div className="border border-p_white px-4 pt-4 flex flex-col gap-4">
              <span>{content.name}</span>
              <span>{content.description}</span>
              <hr />
              <span>{content.price}</span>
              <span>
                {content.store === content.delivery
                  ? `Vendido e entregue por ${content.store}`
                  : `Vendido por ${content.store} e Entregue por ${content.delivery}`}
              </span>
              <hr className="bg-p_white"/>
              <form>
                <select name="variant" id="variant">
                  {content.varient.map((op) => (
                    <option value={op}>{op}</option>
                  ))}
                </select>
                <hr className="bg-p_white"/>
                <select name="size" id="size">
                  {content.size.map((op) => (
                    <option value={op}>{op}</option>
                  ))}
                </select>
                <button className="button">Adicionar à sacola</button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
