import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().required().email(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("passowrd")], "Passwords must match.")
    .required(),
});

type FormData = yup.InferType<typeof schema>;

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="p-4">
      <div className="flex flex-col items-center bg-slate-900 max-w-xs mx-auto shadow p-4 rounded-lg ">
        <form
          className="p-4 flex flex-col gap-4 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <legend className="font-semibold text-white">Sign up</legend>
          <fieldset className="flex flex-col gap-4">
            <input
              {...register("email")}
              className="border p-2"
              type="text"
              placeholder="Email address"
            />
            <p className="text-red-500">{errors.email?.message}</p>
            <input
              {...register("password")}
              className="border p-2"
              type="password"
              placeholder="Password"
            />
            <p className="text-red-500">{errors.password?.message}</p>

            <input
              {...register("confirmPassword")}
              className="border p-2"
              type="password"
              placeholder="Confirm Password"
            />
            <p className="text-red-500">{errors.confirmPassword?.message}</p>
          </fieldset>
          <button type="submit" className="button self-start">
            Register
          </button>
        </form>
        <div>
          <p className="text-white">
            Already have an account?
            <Link to={"/auth/signin"} className="text-blue-500 ml-1">
              Sign in
            </Link>
          </p>
        </div> 
      </div>
    </div>
  );
};

export default SignUp;
