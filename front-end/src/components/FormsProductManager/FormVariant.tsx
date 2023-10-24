import * as yup from "yup";
import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DeleteIcon from "@mui/icons-material/Delete";
import { IVariant } from "../../interfaces/IProduct";
import { useEffect } from "react";

interface IFormVariant {
  onHaveVariant: (variant: IVariant) => void;
  onBack: () => void;
  addNewVariant: () => void;
  variant: IVariant | undefined;
}

const schema = yup.object().shape({
  color: yup.string().required(),
  url: yup.string().required(),
  alt: yup.string().required(),
  stock: yup
    .array()
    .of(
      yup.object().shape({
        size: yup.string().required(),
        quantity: yup.number().required(),
      })
    )
    .required(),
});

type FormData = yup.InferType<typeof schema>;

const FormVariant = ({
  onHaveVariant,
  onBack,
  addNewVariant,
  variant,
}: IFormVariant) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      alt: "",
      color: "",
      url: "",
      stock: [],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "stock",
  });

  const onSubmit = (data: FormData) => {
    onHaveVariant(data);
    reset();
  };

  const addNewSizeAndQuantity = () => {
    append({
      size: "",
      quantity: 0,
    });
  };

  useEffect(() => {
    if (!variant) {
      reset();
    } else {
      setValue("color", variant.color);
      setValue("alt", variant.alt);
      setValue("url", variant.url);
      setValue("stock", variant.stock);
    }
  }, [variant]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset className="flex flex-col items-start gap-2">
        <div className="flex justify-between w-full">
          <legend className="2xl font-semibold">Variação</legend>
          <button
            type="button"
            className="button bg-lime-700"
            onClick={addNewVariant}
          >
            Add nova variação
          </button>
        </div>
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
          <button
            onClick={addNewSizeAndQuantity}
            type="button"
            className="button"
          >
            Add
          </button>
        </div>
        {fields.map((field, index) => (
          <fieldset
            className="flex flex-row w-full gap-4 border p-2 rounded-lg"
            key={field.id}
          >
            <legend>Campo {index + 1}</legend>
            <div>
              <label htmlFor="">Tamanho: </label>
              <input
                className="w-10 border"
                type="text"
                {...register(`stock.${index}.size`)}
              />
            </div>
            <div>
              <label htmlFor="">Quantidade: </label>
              <input
                className="w-10 border"
                type="number"
                {...register(`stock.${index}.quantity`)}
              />
            </div>
            <button onClick={() => remove(index)}>
              <DeleteIcon />
            </button>
          </fieldset>
        ))}
      </fieldset>
      <div className="flex gap-1 py-2">
        <button type="button" className="button bg-blue-500" onClick={onBack}>
          Voltar
        </button>

        <button className="button" type="submit">
          Avançar
        </button>
      </div>
    </form>
  );
};

export default FormVariant;
