import * as Yup from "yup";

export const loginSchema = () => {
  return Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    orgnizationUrl: Yup.string()
      .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Invalid URL")
      .required("orgnization URL is required"),
  });
};

export const orgSchema = () => {
  return Yup.object({
    organizationName: Yup.string()
      .max(100, "Orgnization name can be maximum 100 characters")
      .required("Orgnization name is required"),
    organizationShortName: Yup.string()
      .max(50, "Orgnization short name can be maximum 50 characters")
      .required("Orgnization short name is required"),
    organizationURL: Yup.string()
      .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Invalid URL")
      .required("Orgnization URL is required"),
    organizationLOGO: Yup.string()
      .max(200, "Orgnization short name can be maximum 200 characters")
      .required("Orgnization LOGO is required"),
  });
};
