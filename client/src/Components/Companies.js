import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Features = () => {
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
    <div className='container'>
      <div className=" bg-black bg-opacity-25 mt-3 rounded shadow">
        <h1 className=" text-center p-2">IT companies in India</h1>
        <div className=" d-flex justify-content-center flex-wrap gap-3 mx-3 my-3 py-3 px-3">
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1" style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/TCS.png")}
              alt="TCS"
            />
            <h1 className=' fs-6 my-3 fw-bold'>TCS</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/Wipro.png")}
              alt="Wipro"
            />
            <h1 className=' fs-6 my-3 fw-bold'>Wipro</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/Larsen & Toubro Infotech.png")}
              alt="Larsen & Toubro Infotech"
            />
            <h1 className=' fs-6 my-3 fw-bold'>Larsen & Toubro Infotech</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/eClerx.jpg")}
              alt="eClerx"
            />
            <h1 className=' fs-6 my-3 fw-bold'>eClerx</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/IBM.png")}
              alt="IBM"
            />
            <h1 className=' fs-6 my-3 fw-bold'>IBM</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/Hexaware Technologies.png")}
              alt="Hexaware Technologies"
            />
            <h1 className=' fs-6 my-3 fw-bold'>Hexaware Technologies</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/Infosys.png")}
              alt="Infosys"
            />
            <h1 className=' fs-6 my-3 fw-bold'>Infosys</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/Sonata Software.png")}
              alt="Sonata Software"
            />
            <h1 className=' fs-6 my-3 fw-bold'>Sonata Software</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/Tech Mahindra.webp")}
              alt="Tech Mahindra"
            />
            <h1 className=' fs-6 my-3 fw-bold'>Tech Mahindra</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/Accenture.webp")}
              alt="Accenture"
            />
            <h1 className=' fs-6 my-3 fw-bold'>Accenture</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/Capgemini.png")}
              alt="Capgemini"
            />
            <h1 className=' fs-6 my-3 fw-bold'>Capgemini</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/BLS Infotech.jpeg")}
              alt="BLS Infotech"
            />
            <h1 className=' fs-6 my-3 fw-bold'>BLS Infotech</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/HCL Technologies.png")}
              alt="HCL Technologies"
            />
            <h1 className=' fs-6 my-3 fw-bold'>HCL Technologies</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/Mphasis.jpeg")}
              alt="Mphasis"
            />
            <h1 className=' fs-6 my-3 fw-bold'>Mphasis</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/Cognizant.jpg")}
              alt="Cognizant"
            />
            <h1 className=' fs-6 my-3 fw-bold'>Cognizant</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/Oracle.png")}
              alt="Oracle"
            />
            <h1 className=' fs-6 my-3 fw-bold'>Oracle</h1>
          </div>
          <div className=" shadow bg-info bg-opacity-25 d-flex justify-content-center flex-column align-items-center rounded p-1"  style={{width: "200px", height: "300px"}}>
            <img
              className=" w-100 h-75 rounded-4"
              src={require("../Static/IT/Coforge.webp")}
              alt="Coforge"
            />
            <h1 className=' fs-6 my-3 fw-bold'>Coforge</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features