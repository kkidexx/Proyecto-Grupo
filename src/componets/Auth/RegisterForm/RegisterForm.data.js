import * as Yup from "yup";

export const initialValues = () => {
  return {
    email: "",
    password: "",
    confirmPassword: "",
  };
};

export const validationSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("Correo Invalido")
      .required("El correo es obligatorio"),
    password: Yup.string().required("Introducir contraseña"),
    confirmPassword: Yup.string()
      .required("Confirmar contraseña")
      .oneOf([Yup.ref("password")],"Las contraseñas no coinciden"),
  });
};

