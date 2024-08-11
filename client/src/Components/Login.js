import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validationErr = (id, message) => {
    document.getElementById(id).innerText = message;
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const idx = email.indexOf("@");

    if (email.length < 1) {
      validationErr("emailHelp", "** Email Box Empty **");
      console.log(email.length);
    } else if (!email.includes("@"))
      validationErr("emailHelp", "** Email Should be contain @ **");
    else if (!email[idx - 1] || !email[idx + 1])
      validationErr("emailHelp", "** Email is Incomplete **");
    else if (password.length < 8)
      validationErr(
        "passwordHelp",
        "** Password should be contain 8 digits **"
      );
    else if (!/[a-zA-Z]/g.test(password))
      validationErr("passwordHelp", "** Not Available A-Z OR a-z **");
    else if (!/[0-9]/g.test(password))
      validationErr("passwordHelp", "** Not Available 0-9 **");
    else if (!e.target.checkbox.checked)
      validationErr("checkboxHelp", "** Please Checked **");
    else {
      validationErr("emailHelp", "");
      validationErr("passwordHelp", "");
      validationErr("checkboxHelp", "");
      validationErr("successHelp", "");

      try {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/login`, {
          params: {
            email,
            password,
          },
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("UserName", res.data.UserName);

        setEmail("");
        setPassword("");
        validationErr("successHelp", "** Login Success **");
          navigate("/")

      } catch (err) {
        console.log(err);
        if (err.response.data === "Email Not found")
          validationErr("emailHelp", "** Email Not Registered Please Register **");
        if (err.response.data === "Password incorrect")
          validationErr("passwordHelp", "** Password incorrect **");
      }
    }

    return true;
  };

  return (
    <form
      className=" shadow container my-5 bg-primary bg-opacity-10 rounded-5  p-5"
      onSubmit={formSubmitHandler}
      style={{
        backgroundImage:
          "linear-gradient(rgba(211, 127, 44,0.5),rgba(44, 181, 204,0.5))",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-center py-3 fw-bold">LOGIN</h2>
  <h5 className="text-center py-2">First Register Then Login</h5>
      <div className="mb-3">
        <label
          htmlFor="exampleInputEmail1"
          className="form-label fw-bold mx-3 fs-5"
        >
          Email
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            validationErr("emailHelp", "");
            validationErr("passwordHelp", "");
            validationErr("checkboxHelp", "");
            validationErr("successHelp", "");

            return setEmail(e.target.value);
          }}
        />
        <div
          id="emailHelp"
          className="form-text text-danger fw-bold mx-3"
        ></div>
      </div>
      <div className="mb-3">
        <label
          htmlFor="exampleInputPassword1"
          className="form-label fw-bold mx-3 fs-5"
        >
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            validationErr("emailHelp", "");
            validationErr("passwordHelp", "");
            validationErr("checkboxHelp", "");
            validationErr("successHelp", "");

            return setPassword(e.target.value);
          }}
        />
        <div
          id="passwordHelp"
          className="form-text text-danger fw-bold mx-3"
        ></div>
      </div>
      <div className="mb-3 form-check">
        <input
          type="checkbox"
          className="form-check-input"
          id="exampleCheck1"
          name="checkbox"
        />
        <label className="form-check-label fw-medium" htmlFor="exampleCheck1">
          Terms and Conditions
        </label>
        <div
          id="checkboxHelp"
          className="form-text text-danger fw-bold mx-3"
        ></div>
      </div>
      <div
        id="successHelp"
        className="form-text text-success fw-bold mx-3 text-center"
      ></div>
      <div className="d-flex justify-content-evenly align-items-center">
        <button type="submit" className="btn btn-primary my-3 py-2">
          Login
        </button>
        <Link to={"/register"} className="btn btn-success my-3">
          Register
        </Link>
      </div>
    </form>
  );
};

export default Login;
