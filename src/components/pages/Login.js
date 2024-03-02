import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { loginSchema } from "../../app/schema";
import { useDispatch, useSelector } from "react-redux";
import { loginAsync } from "../../features/loginSlice";
import { useEffect } from "react";

const Login = ({ handleLogin }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.login.userData);

  const {
    values,
    touched,
    setValues,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormik({
    initialValues: {
      email: "hiren@prishusoft.com",
      password: "Hello@123$",
      orgnizationUrl: "http://localhost:4200/",
    },
    // initialValues: {
    //     email: "",
    //     password: "",
    //     orgnizationUrl: "",
    //   },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      dispatch(loginAsync(values));
      //   navigate("/");
    },
  });

  useEffect(() => {
    Object.keys(userData).length > 0 && handleLogin();
  }, [userData]);

  return (
    <div className="container my-auto">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="email"
            id="email"
            value={values.email}
            onChange={handleChange}
            className="form-control"
            onBlur={handleBlur}
          />
          <label className="form-label" htmlFor="email">
            Email address
          </label>
          <span className="text-danger">
            {" "}
            {touched.email && errors.email ? <div>{errors.email}</div> : null}
          </span>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            id="password"
            value={values.password}
            onChange={handleChange}
            className="form-control"
            onBlur={handleBlur}
          />
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <span className="text-danger">
            {" "}
            {touched.password && errors.password ? (
              <div>{errors.password}</div>
            ) : null}
          </span>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="orgnizationUrl"
            value={values.orgnizationUrl}
            onChange={handleChange}
            className="form-control"
            onBlur={handleBlur}
          />
          <label className="form-label" htmlFor="orgnizationUrl">
            Orgnization Url
          </label>
          <span className="text-danger">
            {" "}
            {touched.orgnizationUrl && errors.orgnizationUrl ? (
              <div>{errors.orgnizationUrl}</div>
            ) : null}
          </span>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default Login;
