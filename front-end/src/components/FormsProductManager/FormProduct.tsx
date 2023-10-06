import { useForm } from "react-hook-form";
import * as yup from "yup";
import { Category } from "../../enum/EnumCategory";
import { yupResolver } from "@hookform/resolvers/yup";

const arrayOfCategory = Object.values(Category);
const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().positive().min(1),
  category: yup.string().required().oneOf(arrayOfCategory, "Escolha inválida"),
});

type FormData = yup.InferType<typeof schema>;

const FormProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <legend className="2xl font-semibold">Produto</legend>
      <label htmlFor="name">Nome: </label>
      <input className="border" type="text" {...register("name")} />
      <p>{errors.name?.message}</p>
      <label htmlFor="name">Descrição: </label>
      <textarea className="border" {...register("description")} />
      <p>{errors.description?.message}</p>
      <label htmlFor="name">Preço: </label>
      <input className="border" type="text" {...register("price")} />
      <p>{errors.price?.message}</p>
      <label htmlFor="name">Categoria: </label>
      <select className="border" {...register("category")} id="category">
        {Object.values(Category).map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
      <p>{errors.category?.message}</p>
    </form>
  );
};

export default FormProduct;
