import * as Yup from "yup";

export const SignUpSchema = Yup.object({
  name: Yup.string().max(20, "Name is so long").required("Name is required"),
  email: Yup.string().email("Invalid email").required("required"),
  phone: Yup.string()
    .required("Phone must be 10 or 11 digits")
    .matches(/^\d{10,11}$/, "Phone must be 10 or 11 digits"),
  password: Yup.string().required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm Passwords is required"),
});
