import { useForm, type SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { LoginFormSchema } from "../schema/LoginForm.schema";
import type { LoginForm } from "../types/LoginForm.type";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginForm>({
    resolver: yupResolver(LoginFormSchema),
  });

  const onSumbit: SubmitHandler<LoginForm> = (data) => {
    console.log("heelo", data);
    reset();
  };

  return (
    <div className="flex justify-center items-center  ">
      <form
        className="flex flex-col items-center justify-center  h-[286px] w-[680px]  bg-white rounded-xl mt-8 space-y-4"
        onSubmit={handleSubmit(onSumbit)}
      >
        <h1 className="font-bold text-[28px]">Sign In</h1>
        <div>
          <input
            type="text"
            {...register("email")}
            placeholder="Email"
            className="w-[260px] h-[32px] p-3 border-2 rounded-md border-gray-400"
          />
          <p style={{ color: "red" }}>{errors.email?.message}</p>
        </div>
        <div>
          <input
            type="password"
            {...register("password")}
            placeholder="Password"
            className="w-[260px] h-[32px] p-3 border-2 rounded-md  border-gray-400"
          />
          <p style={{ color: "red" }}>{errors.password?.message}</p>
        </div>
        <div className="flex space-x-8">
          <button
            type="submit"
            className="w-[98px] bg-blue-600 p-1 text-white rounded-md font-semibold"
          >
            Login
          </button>
          <button
            type="submit"
            className="w-[98px] bg-gray-200 p-1 rounded-md font-semibold"
          >
            <Link to="/sign-up"> Sign Up</Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
