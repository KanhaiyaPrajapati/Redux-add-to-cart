import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { Link, Navigate, json, useNavigate } from "react-router-dom";
import * as Yup from "yup";

function SignUp() {
  const [str, setstr] = useState(JSON.parse(localStorage.getItem("obj")));
  const  navigate = useNavigate()


  const SignupValidation = Yup.object({
    fname: Yup.string().min(5).required("Please Enter First Name"),
    lname: Yup.string().min(5).required("Please Enter Last Name"),
    age: Yup.number().required("Please Enter The Age"),
    email: Yup.string().email("Please Enter Valid Email").required("Please Enter The Email ID"),
    password: Yup.string().min(5).required("Please Enter password"),
    ConfirmPassword: Yup.string().oneOf([Yup.ref("password")], "Password Not Match").required("Please Enter Confirm Password"),
  });

  const initialValues = {
    fname: "",
    lname: "",
    age: "",
    email: "",
    password: "",
    ConfirmPassword: "",
  };
  const handlesubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();

    let str = localStorage.setItem("obj", JSON.stringify(values));
    setstr(str);

      if(values != ' ')
      {
        navigate('/login')
      }
      else{
        return SignUp;
      }


  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupValidation}
        onSubmit={handlesubmit}
      >
        {({ errors, isValid, dirty }) => (
          <Form
            className="shadow-lg px-5 py-5 mt-5 mx-auto w-50"
            style={{ border: "1px solid red" }}
          >
            <div>
              <label htmlFor="" className="w-100">
                {" "}
                FirstName{" "}
              </label>
              <Field type="text" name="fname" className="form-control"></Field>
              {errors.fname && <span>{errors.fname}</span>}
            </div>
            <div className="mt-4">
              <label htmlFor="" className="w-100">
                {" "}
                LastName{" "}
              </label>
              <Field type="text" name="lname" className="form-control"></Field>
              {errors.lname && <span>{errors.lname}</span>}
            </div>

            <div className="mt-4">
              <label htmlFor="" className="w-100">
                {" "}
                Age{" "}
              </label>
              <Field type="number" name="age" className="form-control"></Field>
              {errors.age && <span>{errors.age}</span>}
            </div>
            <div className="mt-4">
              {/* <h6>{str?.email }</h6> */}
              <label htmlFor="" className="w-100">
                {" "}
                Email ID{" "}
              </label>
              <Field type="email" name="email" className="form-control"></Field>
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className="mt-4">
              <label htmlFor="" className="w-100">
                {" "}
                password{" "}
              </label>
              <Field
                type="password"
                name="password"
                className="form-control"
              ></Field>
              {errors.password && <span>{errors.password}</span>}
            </div>
            <div className="mt-4">
              <label htmlFor="" className="w-100">
                {" "}
                Confirm Password{" "}
              </label>
              <Field
                type="password"
                name="ConfirmPassword"
                className="form-control"
              ></Field>
              {errors.ConfirmPassword && <span>{errors.ConfirmPassword}</span>}
            </div>
            <div className="text-center mt-5">
            
              <button className="btn btn-danger" type="submit" disabled={!(dirty && isValid)}>
                SignUp
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default SignUp;
