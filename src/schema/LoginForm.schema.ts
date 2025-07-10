import * as Yup from "yup";

export const LoginFormSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("required"),
  password: Yup.string().min(6, "Password too short").required("required"),
});
