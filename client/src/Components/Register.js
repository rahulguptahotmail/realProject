import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate()
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validationErr = (id, message) => {
    document.getElementById(id).innerText = message;
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    const idx = email.indexOf("@");
    if (firstName.length < 1)
      validationErr("firstNameHelp", "** Fill First Name **");
    else if (lastName.length < 1)
      validationErr("lastNameHelp", "** Fill Last Name **");
    else if (phone.length < 10)
      validationErr("phoneHelp", "** Wrong Number **");
    else if (/[a-zA-Z]/g.test(phone))
      validationErr("phoneHelp", "** Alphabet is Not A Number **");
    else if (email.length < 1)
      validationErr("emailHelp", "** Email Box Empty **");
    else if (!email.includes("@"))
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
      validationErr("checkBoxHelp", "** Please Checked **");
    else {
      validationErr("firstNameHelp", "");
      validationErr("lastNameHelp", "");
      validationErr("phoneHelp", "");
      validationErr("emailHelp", "");
      validationErr("passwordHelp", "");
      validationErr("checkBoxHelp", "");

      try {
        await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/register`, {
          firstName,
          lastName,
          phone,
          email,
          password,
        });
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setPassword("");
        navigate("/login")
      } catch (err) {
        if (err.response.data === "phone")
        {
          console.log(err)
          validationErr("phoneHelp", "** Phone Number is Already Registered **");
        }
        if (err.response.data === "email")
          {validationErr("emailHelp", "** Email is Already Registered **");}
      }
    }

   

    return true;
  };

  return (
    <form
      className="shadow container my-5 bg-primary bg-opacity-10 rounded-5  p-5"
      method="post"
      onSubmit={formSubmitHandler}
      style={{
        backgroundImage:
          "linear-gradient(rgba(211, 127, 44,0.1),rgba(44, 181, 204,0.1))",
        backgroundSize: "cover",
      }}
    >
      <h2 className="text-center py-3 fw-bold">REGISTER</h2>
  <h6 className="text-center py-2">Already Register Then Login</h6>

      <div className="d-flex justify-content-evenly gap-5 flex-lg-row flex-column">
        <div className="mb-3 w-100 ">
          <label
            htmlFor="exampleInputFirstName1"
            className="form-label fw-bold mx-3 fs-5"
          >
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputfirstName1"
            aria-describedby="firstNameHelp"
            placeholder="FirstName"
            value={firstName}
            onChange={(e) => {
              validationErr("firstNameHelp", "");
              validationErr("lastNameHelp", "");
              validationErr("phoneHelp", "");
              validationErr("emailHelp", "");
              validationErr("passwordHelp", "");
              validationErr("checkBoxHelp", "");
              return setFirstName(e.target.value);
            }}
          />
          <div
            id="firstNameHelp"
            className="form-text text-danger fw-bold mx-3"
          ></div>
        </div>

        <div className="mb-3  w-100">
          <label
            htmlFor="exampleInputlastName1"
            className="form-label fw-bold mx-3 fs-5"
          >
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputlastNameName1"
            aria-describedby="lastNameHelp"
            placeholder="lastName"
            value={lastName}
            onChange={(e) => {
              validationErr("firstNameHelp", "");
              validationErr("lastNameHelp", "");
              validationErr("phoneHelp", "");
              validationErr("emailHelp", "");
              validationErr("passwordHelp", "");
              validationErr("checkBoxHelp", "");
              return setLastName(e.target.value);
            }}
          />
          <div
            id="lastNameHelp"
            className="form-text text-danger fw-bold mx-3"
          ></div>
        </div>
      </div>

      <div className="mb-3">
        <label
          htmlFor="exampleInputphone1"
          className="form-label fw-bold mx-3 fs-5"
        >
          Phone
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputphone1"
          aria-describedby="phoneHelp"
          placeholder="Phone"
          value={phone}
          onChange={(e) => {
            validationErr("firstNameHelp", "");
            validationErr("lastNameHelp", "");
            validationErr("phoneHelp", "");
            validationErr("emailHelp", "");
            validationErr("passwordHelp", "");
            validationErr("checkBoxHelp", "");
            return setPhone(e.target.value);
          }}
        />
        <div
          id="phoneHelp"
          className="form-text text-danger fw-bold mx-3"
        ></div>
      </div>

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
            validationErr("firstNameHelp", "");
            validationErr("lastNameHelp", "");
            validationErr("phoneHelp", "");
            validationErr("emailHelp", "");
            validationErr("passwordHelp", "");
            validationErr("checkBoxHelp", "");
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
            validationErr("firstNameHelp", "");
            validationErr("lastNameHelp", "");
            validationErr("phoneHelp", "");
            validationErr("emailHelp", "");
            validationErr("passwordHelp", "");
            validationErr("checkBoxHelp", "");
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
          id="checkBoxHelp"
          className="form-text text-danger fw-bold mx-3"
        ></div>
      </div>
      <div className="d-flex justify-content-evenly align-items-center">
        <button type="submit" className="btn btn-primary my-3 py-2">
          Register
        </button>
        <Link to={"/login"} className="btn btn-success my-3">
          Login
        </Link>
      </div>
    </form>
  );
};

export default Register;
