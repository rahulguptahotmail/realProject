import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className=" text-center rounded-top-4"
      style={{marginTop :` ${window.screen.availHeight/4}px`,
        backgroundColor: "rgba(46, 204, 113,0.2)"
      }}
    >
      <div className="container p-4 pb-0" >
        <section className="mb-4" >
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating mx-2"
            style={{ backgroundColor: "#3b5998" }}
            to={"https://www.facebook.com/profile.php?id=100069435079228"}
            role="button"
            target="_blank"
          >
            <i className="fab fa-facebook-f"></i>
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating mx-2"
            style={{ backgroundColor: "#55acee" }}
            to={"https://x.com/rahulgupta72485"}
            role="button"
            target="_blank"
          >
            <i className="fab fa-twitter"></i>
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating mx-2"
            style={{ backgroundColor: "#ac2bac" }}
            to={"https://www.instagram.com/rahulguptahotmail/"}
            role="button"
            target="_blank"
          >
            <i className="fab fa-instagram"></i>
          </Link>

          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating mx-2"
            style={{ backgroundColor: "#0082ca" }}
            to={"https://www.linkedin.com/in/rahul-gupta-a3504628b/"}
            role="button"
            target="_blank"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
          <Link
            data-mdb-ripple-init
            className="btn text-white btn-floating mx-2"
            style={{ backgroundColor: "#333333" }}
            to={"https://github.com/rahulguptahotmail"}
            role="button"
            target="_blank"
          >
            <i className="fab fa-github"></i>
          </Link>
        </section>
      </div>

      <div
        className="text-center py-2 rounded"
        style={{ backgroundColor: "rgba(46, 204, 113,0.3)" }}
      >
        <div >
          <i
            className="fa-solid fa-user mx-2 fs-5"
            style={{ display: "inline-block" }}
          ></i>
          <h6 className="fw-bold" style={{ display: "inline-block" }}>
            Developed By : <span className="fs-5">Rahul Gupta</span>
          </h6>
        </div>

        <div>
          <i
            className="fa-solid fa-envelope mx-2 fs-5"
            style={{ display: "inline-block" }}
          ></i>
          <h6 className="fw-bold" style={{ display: "inline-block" }}>
            rahulguptahotmail@gmail.com
          </h6>
        </div>

        <div>
          <h5>Copyright &copy; Designed By Rahul Gupta Laptop Model 1997</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
