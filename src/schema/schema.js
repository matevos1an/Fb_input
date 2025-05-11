import * as YUP from "yup";

export const SchemaInput = YUP.object().shape({
  login: YUP
    .string()
    .min(8, "Login must be at least 8 characters")
    .max(16, "Login must be at most 16 characters")
    .required("Login is required"),

  email: YUP
    .string()
    .email("Invalid email format")
    .required("Email is required"),

  password: YUP
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(16, "Password must be at most 16 characters")
    .required("Password is required"),

  confirmPassword: YUP
    .string()
    .oneOf([YUP.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required")
});


  // .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password must contain at least one letter and one number")

    





