import * as yup from "yup";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  color: yup.string().required(),
  url: yup.string().required(),
  alt: yup.string().required(),
  sizesAndQuantities: yup.array().of(
    yup.object().shape({
      size: yup.string().required(),
      quantity: yup.number().required(),
    })
  ),
});

type FormData = yup.InferType<typeof schema>;

const FormVariant = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({ resolver: yupResolver(schema) });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "sizesAndQuantities",
  });
  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  const addNewSizeAndQuantity = () => {
    append({
      size: "",
      quantity: 0,
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="flex flex-col items-start gap-2">
        <legend className="2xl font-semibold">Variação</legend>
        <label htmlFor="">Cor: </label>
        <input className="border" type="text" {...register("color")} />
        <label htmlFor="">Url: </label>
        <input className="border" type="url" {...register("url")} />
        <label htmlFor="">Descrição da imagem: </label>
        <input className="border" type="text" {...register("alt")} />
      </fieldset>
      <fieldset className="flex flex-col items-start">
        <div className="flex justify-between gap-4 items-center">
          <legend className="2xl font-semibold">Tamanhos e quantidades</legend>
          <button onClick={addNewSizeAndQuantity} type="button" className="button">
            Add
          </button>
        </div>
        {fields.map((field, index) => (
          <fieldset key={field.id}>
            <legend>Campo {index + 1}</legend>
            <label htmlFor="">Tamanho: </label>
            <input
              type="text"
              {...register(`sizesAndQuantities.${index}.size`)}
            />
            <label htmlFor="">Quantidade: </label>
            <input
              type="number"
              {...register(`sizesAndQuantities.${index}.quantity`)}
            />
          </fieldset>
        ))}
      </fieldset>
    </form>
  );
};

export default FormVariant;
