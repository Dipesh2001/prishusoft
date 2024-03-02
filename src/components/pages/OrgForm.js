import { useFormik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { orgSchema } from "../../app/schema";
import { addOrgAsync } from "../../features/orgSlice";

const OrgForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const userData = useSelector((state) => state.login.userData);

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
      organizationName: "",
      organizationShortName: "",
      organizationURL: "",
      organizationLOGO: "",
    },
    validationSchema: orgSchema,
    onSubmit: (values) => {
      dispatch(addOrgAsync(values));
    },
  });

  return (
    <div className="container my-auto">
      <h3>Add Orgnization</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="text"
            id="organizationName"
            value={values.organizationName}
            onChange={handleChange}
            className="form-control"
            onBlur={handleBlur}
            maxLength={10}
          />
          <label className="form-label" htmlFor="organizationName">
            Organization Name
          </label>
          <span className="text-danger">
            {" "}
            {touched.organizationName && errors.organizationName ? (
              <div>{errors.organizationName}</div>
            ) : null}
          </span>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="organizationShortName"
            value={values.organizationShortName}
            onChange={handleChange}
            className="form-control"
            onBlur={handleBlur}
          />
          <label className="form-label" htmlFor="organizationShortName">
            Organization Short Name
          </label>
          <span className="text-danger">
            {" "}
            {touched.organizationShortName && errors.organizationShortName ? (
              <div>{errors.organizationShortName}</div>
            ) : null}
          </span>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="organizationURL"
            value={values.organizationURL}
            onChange={handleChange}
            className="form-control"
            onBlur={handleBlur}
          />
          <label className="form-label" htmlFor="organizationURL">
            Organization Url
          </label>
          <span className="text-danger">
            {" "}
            {touched.organizationURL && errors.organizationURL ? (
              <div>{errors.organizationURL}</div>
            ) : null}
          </span>
        </div>

        <div className="form-outline mb-4">
          <input
            type="text"
            id="organizationLOGO"
            value={values.organizationLOGO}
            onChange={handleChange}
            className="form-control"
            onBlur={handleBlur}
          />
          <label className="form-label" htmlFor="organizationLOGO">
            Organization Logo
          </label>
          <span className="text-danger">
            {" "}
            {touched.organizationLOGO && errors.organizationLOGO ? (
              <div>{errors.organizationLOGO}</div>
            ) : null}
          </span>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
          Add
        </button>
      </form>
    </div>
  );
};

export default OrgForm;
