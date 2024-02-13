import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { tab } from "@testing-library/user-event/dist/tab";

const LoginValidation = Yup.object({
  email: Yup.string()
    .email("Please Enter Valid Email")
    .required("Please Enter The Field"),
  password: Yup.string().min(5).required("Please Enter The Field"),
});

const initialValues = {
  email: "",
  password: "",
};

function Login() {
  const [value, setvalue] = useState(JSON.parse(localStorage.getItem("obj")));
  const navigate = useNavigate();

  const handlesubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();

    let p = JSON.parse(localStorage.getItem("obj"));
    console.log(p);

    let checkemail = values.email;

    console.log(checkemail);
    console.log(value.email);

    if (checkemail == value.email) {
      navigate("/cardlisting");
      console.log('Email Id & Password  are matched');
    }
    
    else {
      console.log("Email Id & Password are Not matched");
      alert('Email id are not matched')
    }

    // if( values.email   &&  values.password == ' '){
    //     return Login;
    // }
    // else{
    //     navigate('/product')
    // }

    // let display = localStorage.setItem("email", values.email);
    // let display1 = localStorage.getItem("email");
  
  };
  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={LoginValidation}
        onSubmit={handlesubmit}
      >
        {({ errors, dirty, isValid }) => (
          <Form
            action=""
            className="shadow-lg mx-auto w-50 px-5 py-5 mt-5"
            style={{ border: "1px solid red" }}
          >
            <div>
              <label htmlFor="email" className="w-100">
                {/* <h5>{value.email}</h5> */}
                Email
              </label>
              <Field type="email" name="email" className="form-control"></Field>
              {errors.email && <span>{errors.email}</span>}
            </div>
            <div className="mt-4">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                name="password"
                className="form-control"
              ></Field>
              {errors.password && <span>{errors.password}</span>}
            </div>
            <div className="text-center mt-4">
              <button
                className="btn btn-warning me-3"
                disabled={!(dirty && isValid)}
                type="submit"
              >
                Login
              </button>
              <Link to="/Signup">
                <button className="btn btn-danger">Sign UP</button>
              </Link>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default Login;
