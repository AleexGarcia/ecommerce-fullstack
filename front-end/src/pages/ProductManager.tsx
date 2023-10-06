import { useState } from "react";
import FormProduct from "../components/FormsProductManager/FormProduct";
import FormVariant from "../components/FormsProductManager/FormVariant";

const ProductManager = () => {

  const [steps, setSteps] = useState<Array<string>>(["Produto", "Variação"]);
  const [step, setStep] = useState<number>(0);

  return (
    <div className="flex flex-col items-start gap-4 max-w-[90%] mx-auto">
      <div className="flex border rounded-xl">
        {steps.map((step, index) => {
          return (
            <span className="border p-2 first:rounded-l-xl">
              {`${step} ${step === "Variação" ? `- ${index}` : ""}`}
            </span>
          );
        })}
        <span className="border p-2 rounded-r-xl">Finalizar</span>
      </div>
      {steps[step] === "Produto" ? (
        <FormProduct />
      ) : steps[step] === "Variação" ? (
        <>
          <FormVariant />
        </>
      ) : (
        <div className="text-center w-full p-10 border">
          Clique em salvar produto para finalizar o cadastro!
        </div>
      )}
      <div className="flex justify-between w-full">
        <div className="flex gap-2">
          {steps[step] != "Produto" && (
            <>
              <button onClick={() => setStep(step - 1)} className="button">
                Voltar
              </button>
              <button
                onClick={() => setSteps((value) => [...value, "Variação"])}
                className="button bg-blue-500"
              >
                Add + uma variação do produto
              </button>
            </>
          )}
          {step < steps.length && (
            <button onClick={() => setStep(step + 1)} className="button">
              Avançar
            </button>
          )}
          {step === steps.length && (
            <button type="submit" className="button bg-orange-500">
              Salvar produto
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductManager;
