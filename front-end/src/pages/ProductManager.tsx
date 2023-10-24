import { useState } from "react";
import FormProduct from "../components/FormsProductManager/FormProduct";
import FormVariant from "../components/FormsProductManager/FormVariant";
import { IProduct, IVariant } from "../interfaces/IProduct";

type stepType = "product" | "variant" | "done";

const ProductManager = () => {
  const [stepList, setStepList] = useState<Array<stepType>>([
    "product",
    "variant",
    "done",
  ]);

  const [step, setStep] = useState<number>(0);
  const [product, setProduct] = useState<IProduct>({
    name: "",
    category: undefined,
    description: "",
    price: 0.01,
    variants: [],
  });

  const saveProduct = () => {
    try {
      console.log(product);
      alert('produto salvo');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="flex flex-col items-start gap-4 max-w-[90%] mx-auto">
      <div className="flex border rounded-xl flex-wrap">
        {stepList.map((el, index) => {
          return (
            <span
              key={index}
              className={`border p-2 first:rounded-l-xl ${
                index === step && "font-bold"
              }`}
            >
              {`${
                el === "variant"
                  ? `Variação - ${index}`
                  : el === "product"
                  ? "Produto"
                  : "Finalizar"
              }`}
            </span>
          );
        })}
      </div>

      {stepList[step] === "product" && (
        <FormProduct
          product={product}
          onHaveProduct={(name, category, description, price) => {
            setProduct((prevProduct) => ({
              ...prevProduct,
              name,
              category,
              price,
              description,
            }));
            setStep(step + 1);
          }}
        />
      )}

      {stepList[step] === "variant" && (
        <FormVariant
          onBack={() => setStep(step - 1)}
          onHaveVariant={(currentVariant: IVariant) => {
            let variants = product.variants;
            variants[step - 1] = currentVariant;
            setProduct((prevProduct) => ({ ...prevProduct, variants }));
            setStep(step + 1);
          }}
          addNewVariant={() =>
            setStepList((prevStepList) => {
              const newStepList = [...prevStepList];
              newStepList.splice(newStepList.length - 1, 0, "variant");
              return newStepList;
            })
          }
          variant={product.variants[step - 1]}
        />
      )}

      {stepList[step] === "done" && (
        <div>
          <div className="text-center w-full p-10 border">
            Clique em salvar produto para finalizar o cadastro!
          </div>
          <div>
            <button
              className="button bg-p_green"
              onClick={() => setStep(step - 1)}
            >
              Voltar
            </button>
            <button onClick={saveProduct} className="button bg-orange-500">Salvar produto</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManager;
