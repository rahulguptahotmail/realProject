import React, { useEffect } from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

const About = () => {

  const navigate = useNavigate()
  const authentication = ()=>{
    const token = localStorage.getItem('token');
    if(!token)
    {
      navigate('/login')
    }
  }
  useEffect(()=>{
        authentication();
  },[])
  return (
    <div className="container">
    <div className="rounded border bg-danger bg-opacity-25 position-relative">
        <i className="fa-solid fa-plus rounding mx-0 my-0 position-absolute"></i>
      <div
        className=" shadow d-flex justify-content-center justify-content-lg-evenly align-items-center border rounded-pill overflow-hidden bg-light border"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,0,0.2),rgba(0,155,255,0.5))`,
        }}
      >
        <div className="mx-1 bg-light bg-opacity-10 rounded-5 px-2 py-2">
          <h1 className="bg-danger px-1 rounded bg-opacity-25">INTRODUCTION</h1>
          <div className=" bg-info bg-opacity-10 rounded-pill px-2 my-1">
            <span className=" fs-5">Name : </span>
            <span className="fs-4 fw-bold">Rahul Gupta</span>
          </div>
          <div className=" bg-info bg-opacity-10 rounded-pill px-2 my-1">
            <span  className=" fs-5">Course : </span>
            <span className="fs-4 fw-bold">BCA</span>
          </div>
          <div className=" bg-info bg-opacity-10 rounded-pill px-2 my-1">
            <span  className=" fs-5">Goal : </span>
            <span className="fs-4 fw-bold">Engineering</span>
          </div>
          <div className=" bg-info bg-opacity-10 rounded-pill px-2 my-1">
            <span  className=" fs-5">Profession : </span>
            <span className="fs-4 fw-bold">Study</span>
          </div>
        </div>
        <img src={`${require("../../Static/me.png")}`} alt="Me" className="d-none d-md-inline-block" />
      </div>
      </div>
    </div>
  );
};

export default About ;
