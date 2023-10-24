import {  useForm } from "react-hook-form";
import * as yup from "yup";
import { Category } from "../../enum/EnumCategory";
import { yupResolver } from "@hookform/resolvers/yup";
import { IProduct } from "../../interfaces/IProduct";

const arrayOfCategory = Object.values(Category);
const schema = yup.object({
  name: yup.string().required(),
  description: yup.string().required(),
  price: yup.number().positive().min(0.01).required(),
  category: yup.string().required().oneOf(arrayOfCategory, "Escolha inválida"),
});

type FormData = yup.InferType<typeof schema>;

interface IFormProduct {
  product: IProduct;
  onHaveProduct: (
    name: string,
    category: Category,
    description: string,
    price: number
  ) => void;
}

const FormProduct = ({ product, onHaveProduct }: IFormProduct) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      category: product?.category,
      description: product?.description,
      name: product?.name,
      price: product?.price,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const { name, category, description, price } = data;
    onHaveProduct(name, category, description, price);

  };

  return (
    <>
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
        <div>
          <button className="button" type="submit">Avançar</button>
        </div>
      </form>
    </>
  );
};

export default FormProduct;
