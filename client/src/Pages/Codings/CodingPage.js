import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const CodingPage = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("");
  const [code, setCode] = useState("");
  const [newLine, setNewLine] = useState([]);

  const textAreaHandler = (e) => {
    setCode(e.target.value);
    setNewLine(e.target.value.split("\n"));
  };

  const SaveHandler = async (e) => {
    e.preventDefault();
    const index = window.location.pathname.split("/")[2];
    if (index) {
      await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/codeitem/${index}`, {
        token: localStorage.getItem("token"),
        language,
        code,
      });
    } else {
      await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/codeitem`, {
        token: localStorage.getItem("token"),
        language,
        code,
      });

      const res = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/codeitemlength`, {
        params: { token: localStorage.getItem("token") },
      });
      navigate(`/codingpage/${res.data}`);
    }
  };

  const SaveExitHandler = async (e) => {
    e.preventDefault();
    const index = window.location.pathname.split("/")[2];
    if (index) {
      await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/codeitem/${index}`, {
        token: localStorage.getItem("token"),
        language,
        code,
      });

      navigate(`/`);
    } else {
      await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/codeitem`, {
        token: localStorage.getItem("token"),
        language,
        code,
      });
      navigate(`/`);
    }
  };

  const getdata = async (index) => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/codeupdate/${index}`, {
      params: { token: localStorage.getItem("token") },
    });
    setLanguage(res.data.language);
    setCode(res.data.code);
  };

  useEffect(() => {
    const index = window.location.pathname.split("/")[2];
    if (index) getdata(index);
  }, []);

  return (
    <div className="container">
      <div className=" bg-light rounded">
        <div className=" p-3 d-flex justify-content-evenly">
          <Link to={"/"} className="btn btn-outline-dark">
            BACK
          </Link>
          <button
            onClick={(e) => SaveHandler(e)}
            className="btn btn-outline-success"
          >
            SAVE
          </button>
        </div>

        <div className=" bg-body-secondary py-3">
          <div className=" gap-3 d-flex  px-5">
            <input
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              type="text"
              placeholder="Language"
              className=" w-75 fs-3 fw-bold px-3 rounded "
            />
            <Link
              onClick={(e) => SaveExitHandler(e)}
              className=" btn btn-outline-success w-25 fw-bold fs-5"
            >
              Save & Exit
            </Link>
          </div>

          <div className=" m-4 position-relative">
            <textarea
              rows={newLine.length + 5}
              placeholder="Type Your Code"
              className=" px-5 p-3 fw-bold fs-5 w-100"
              value={code}
              onChange={(e) => textAreaHandler(e)}
            />
            <div
              className=" d-flex flex-column position-absolute start-0"
              style={{ top: "18px" }}
            >
              {newLine.map((line, index) => (
                <span
                  key={index}
                  className=" fw-bold fs-5 border-end border-black px-2"
                >
                  {index + 1}
                </span>
              ))}
            </div>
            <div className=" position-absolute bottom-0 pb-3 ps-3 fw-bold text-danger ">
              {code.length} Characters
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CodingPage;
