import { useForm, type SubmitHandler } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import type { SignUpForm } from "../types/SignUp.type";
import { SignUpSchema } from "../schema/SignUpForm.schema";
import { Link } from "react-router-dom";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SignUpForm>({
    resolver: yupResolver(SignUpSchema),
  });

  const onSumbit: SubmitHandler<SignUpForm> = (data) => {
    console.log("heelo", data);
    reset();
    alert("Sign Up Successfully");
  };

  return (
    <div className="flex justify-center items-center  ">
      <form
        className="flex flex-col items-center justify-center  h-[486px] w-[580px]  bg-white rounded-xl mt-8 space-y-4"
        onSubmit={handleSubmit(onSumbit)}
      >
        <h1 className="font-bold text-[28px]">Sign In</h1>
        <div>
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            className="w-[260px] h-[32px] p-3 border-2 rounded-md border-gray-400"
          />
          <p style={{ color: "red" }}>{errors.name?.message}</p>
        </div>
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
            type="text"
            inputMode="numeric"
            pattern="\d*"
            {...register("phone")}
            placeholder="Phone"
            className="w-[260px] h-[32px] p-3 border-2 rounded-md border-gray-400"
          />
          <p style={{ color: "red" }}>{errors.phone?.message}</p>
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
        <div>
          <input
            type="password"
            {...register("confirmPassword")}
            placeholder="Confirm Password"
            className="w-[260px] h-[32px] p-3 border-2 rounded-md  border-gray-400"
          />
          <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        </div>
        <div className="flex space-x-8">
          <button className="w-[98px] bg-blue-600 p-1 text-white rounded-md font-semibold">
            <Link to="/"> back</Link>
          </button>
          <button
            type="submit"
            className="w-[98px] bg-gray-200 p-1 rounded-md font-semibold"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
