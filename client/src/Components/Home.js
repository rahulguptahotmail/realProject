import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const authentication = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  };

  const getCodeItem = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/getcodeitem`, {
      params: { token: localStorage.getItem("token") },
    });
    const items = await res.data;
    setData(items);
  };

  const deleteHandler = async (e, idx) => {
    e.preventDefault();
    const res = await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/codedelete/${idx}`, {
      token: localStorage.getItem("token"),
    });
  };

  const viewHandler = async (e, idx) => {
    e.preventDefault();
    navigate(`/codingpage/${idx}`)
  };

  useEffect(() => {
    authentication();
    const token = localStorage.getItem("token");
    if (token) getCodeItem();
  }, [deleteHandler]);
  return (
    <div className="container">
      <div className="d-flex shadow align-content-center bg-info bg-opacity-25 rounded-end-pill rounded-5 pe-5">
        <div className=" w-50">
          <img
            className="w-75"
            style={{ height: "50vh" }}
            src={require("../Static/RahulGupta.png")}
            alt="author"
          />
        </div>

        <div className=" w-50 my-5 h-50">
          <h1>
            Hi{" "}
            <span className=" text-warning text-opacity-75 text-decoration-underline">
              {localStorage.getItem("UserName")}
            </span>{" "}
            I’m Rahul Gupta
          </h1>
          <p>
            During my studies, I’ve developed a strong foundation in MERN-STACK,
            and I’ve worked on various projects that have allowed me to gain
            hands-on experience in CRUD Operation.
          </p>
          <span>Click Here </span>
          <Link to={"/tools/add"} className="btn btn-primary mx-1 fw-bold">
            ADD Ideas
          </Link>
        </div>
      </div>

      <div className="bg-success bg-opacity-25 my-3 rounded shadow border">
        <div className=" border-bottom shadow mb-2 bg-body-tertiary bg-opacity-10 text-center">
          <h1>Projects</h1>
        </div>
        <div className="text-center mx-5 my-3">
          <Link
            to={"/codingpage"}
            className=" btn btn-outline-primary w-100 fw-bold border-bottom shadow"
          >
            ADD Your Coding
          </Link>
        </div>
        <div className=" d-flex justify-content-center flex-wrap align-items-start">
          {data.length > 0 ? (
            data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="text-center bg-black bg-opacity-10 shadow d-inline-block rounded p-3 m-3 border"
                >
                  <h3 className=" text-primary">{item.language}</h3>
                  <hr/>
                  <div
                    className=" overflow-auto"
                    style={{ width: "300px", maxHeight: "300px" }}
                  >
                    <p>{item.code}</p>
                  </div>
                  <div className=" d-flex justify-content-around w-100 gap-3 my-3">
                    <Link
                      onClick={(e) => deleteHandler(e, index)}
                      className="btn btn-outline-danger fw-bold"
                    >
                      DELETE
                    </Link>
                    <Link onClick={(e)=>viewHandler(e,index)} className="btn shadow   fw-bold btn-outline-success">
                      View
                    </Link>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>No Data Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
