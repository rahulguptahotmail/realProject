import React from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  HeaderHandlerHide,
  HeaderHandlerShow,
  HeaderHandlerToggle,
  addClass,
  removeClass,
} from "../Utils/HeaderFirst";

const Header = () => {
  const navigate = useNavigate();
  const refHand = async () => {
    await localStorage.removeItem("token");
    await localStorage.removeItem("UserName");
    navigate("/");
  };

  return (
    <>
      <nav
        className="shadow navbar navbar-expand-lg mb-3 rounded-bottom-4 position-sticky w-100 top-0 z-3"
        style={{
          backgroundImage: `linear-gradient(to left, rgba(211, 84, 0,1),rgba(255,255,255,1),rgba(46, 204, 113,1))`,
        }}
      >
        <div className=" d-flex container px-4">
          <Link className="navbar-brand mx-6" to="/">
            <img
              src={require("../Static/LOGO.png")}
              alt="LOGO"
              style={{ width: "2.8rem" }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span
              className="navbar-toggler-icon"
              onClick={(e) => (e) => {
                console.log(e);
              }}
            ></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav gap-3 fw-bold fs-5 ">
              <li className="nav-item d-inline-block d-lg-none">
                <img
                  src={require("../Static/user.png")}
                  alt="User_Image"
                  style={{ width: "10%" }}
                />
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link d-flex align-items-center gap-1"
                  aria-current="page"
                  to="/"
                >
                  <i className="fa-solid fa-house" />
                  Home
                </Link>
              </li>

              <li className="nav-item ">
                <Link
                  className="nav-link d-flex align-items-center gap-1"
                  to="/companies"
                >
                  <i className="fa-brands fa-codepen" />
                  Companies
                </Link>
              </li>
              <div className=" d-flex justify-content-between align-items-center">
                <li className="nav-item position-relative">
                  <button
                    className="nav-link d-inline-block d-flex align-items-center gap-1"
                    onMouseMove={() => HeaderHandlerShow("codingId")}
                    onMouseOut={() => HeaderHandlerHide("codingId")}
                  >
                    <i className="fa-solid fa-code" />
                    Coding
                    <i className="fa-solid fa-angle-down"></i>
                  </button>

                  <ul
                    className="  position-absolute top-75 bg-light px-3 w-auto py-3  list-unstyled rounded d-none "
                    onMouseMove={() => HeaderHandlerShow("codingId")}
                    onMouseOut={() => HeaderHandlerHide("codingId")}
                    id="codingId"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(255,0,0,0.1),rgba(0,255,0,0.1),rgba(0,0,255,0.1))",
                    }}
                  >
                    <Link
                      to={"/coding/html"}
                      className=" p-3 rounded-end-pill nav-link bg-opacity-50"
                      onMouseEnter={(e) => addClass(e)}
                      onMouseLeave={(e) => removeClass(e)}
                    >
                      HTML
                    </Link>
                    <Link
                      to={"/coding/css"}
                      className="p-3 rounded-end-pill nav-link bg-opacity-50"
                      onMouseEnter={(e) => addClass(e)}
                      onMouseLeave={(e) => removeClass(e)}
                    >
                      CSS
                    </Link>
                    <Link
                      to={"/coding/javascript"}
                      className="p-3 rounded-end-pill nav-link bg-opacity-50"
                      onMouseEnter={(e) => addClass(e)}
                      onMouseLeave={(e) => removeClass(e)}
                    >
                      JAVASCRIPT
                    </Link>
                  </ul>
                </li>

                <li className="nav-item position-relative">
                  <button
                    className="nav-link d-inline-block d-flex align-items-center gap-1"
                    onMouseMove={() => HeaderHandlerShow("aboutId")}
                    onMouseOut={() => HeaderHandlerHide("aboutId")}
                  >
                    <i className="fa-solid fa-circle-exclamation" />
                    About
                    <i className="fa-solid fa-angle-down mx-1"></i>
                  </button>
                  <ul
                    className="  position-absolute top-75  bg-light px-3 w-auto py-3 d-none list-unstyled rounded"
                    onMouseMove={() => HeaderHandlerShow("aboutId")}
                    onMouseOut={() => HeaderHandlerHide("aboutId")}
                    id="aboutId"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(255,0,0,0.1),rgba(0,255,0,0.1),rgba(0,0,255,0.1))",
                    }}
                  >
                    <Link
                      to={"/about/about"}
                      className="p-3 rounded-end-pill nav-link bg-opacity-50"
                      onMouseEnter={(e) => addClass(e)}
                      onMouseLeave={(e) => removeClass(e)}
                    >
                      About
                    </Link>
                  </ul>
                </li>

                <li className="nav-item position-relative">
                  <button
                    className="nav-link d-inline-block d-flex align-items-center gap-1"
                    onMouseMove={() => HeaderHandlerShow("toolsId")}
                    onMouseOut={() => HeaderHandlerHide("toolsId")}
                  >
                    <i className="fa-solid fa-toolbox" />
                  Ideas
                    <i className="fa-solid fa-angle-down mx-1"></i>
                  </button>
                  <ul
                    className="  position-absolute top-75  bg-light px-3 w-auto py-3 d-none list-unstyled rounded"
                    onMouseMove={() => HeaderHandlerShow("toolsId")}
                    onMouseOut={() => HeaderHandlerHide("toolsId")}
                    id="toolsId"
                    style={{
                      backgroundImage:
                        "linear-gradient(to bottom, rgba(255,0,0,0.1),rgba(0,255,0,0.1),rgba(0,0,255,0.1))",
                    }}
                  >
                    <Link
                      to={"/tools/add"}
                      className="p-3 rounded-end-pill nav-link bg-opacity-50"
                      onMouseEnter={(e) => addClass(e)}
                      onMouseLeave={(e) => removeClass(e)}
                    >
                      ADD
                    </Link>

                    <Link
                      to={"/tools/items"}
                      className="p-3 rounded-end-pill nav-link bg-opacity-50"
                      onMouseEnter={(e) => addClass(e)}
                      onMouseLeave={(e) => removeClass(e)}
                    >
                      ITEMS
                    </Link>
                  </ul>
                </li>
              </div>
              {!localStorage.getItem("token") ? (
                <li className="nav-item d-flex justify-content-center align-items-center bg-danger bg-opacity-25 gap-lg-0 gap-5 rounded-pill">
                  <Link
                    className="nav-link nav-item d-inline-block"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className="nav-link nav-item d-inline-block"
                    to="/register"
                  >
                    Register
                  </Link>
                </li>
              ) : (
                <li className="nav-item bg-danger bg-opacity-25 gap-lg-0 rounded-pill">
                  <Link
                    className="nav-link nav-item d-inline-block d-flex justify-content-center"
                    to={"/login"}
                    onClick={() => refHand()}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className="d-lg-inline-block d-none position-relative">
            <img
              src={require("../Static/user.png")}
              alt="User_Image"
              onClick={() => HeaderHandlerToggle("profileId")}
              className=" d-lg-none d-xxl-inline-block"
              style={{ width: "15%", marginLeft: "85%" }}
            />
            <div
              className="position-absolute end-0 d-none rounded"
              id="profileId"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, rgba(200,150,100,1),rgba(100,150,200,1))",
              }}
            >
              <div className="d-none d-lg-inline-block p-3 ">
                <div>
                  <h2 className=" d-inline-block">Hello</h2> :{" "}
                  {localStorage.getItem("UserName") ? (
                    <h1 className=" d-inline-block text-danger">
                      {" "}
                      {localStorage.getItem("UserName")}
                    </h1>
                  ) : (
                    <h1 className=" d-inline-block text-info"> Please Login</h1>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
