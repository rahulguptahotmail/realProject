import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const navigate = useNavigate();
  const authentication = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  };
  useEffect(() => {
    authentication();
  }, []);
  const [title, setTitle] = useState("");
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");

  const addHandler = async (e) => {
    const data = {
      title,
      topic,
      description,
      UserName: localStorage.getItem("UserName")
    };

    if (title.length < 1) {
      document.getElementById("titleHelp").innerText = "** Blank **";
    } else if (topic.length < 1) {
      document.getElementById("topicHelp").innerText = "** Blank **";
    } else {
      try {
        await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/items/add`, data);
        navigate("/tools/items");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="container">
      <div className="d-flex justify-content-evenly p-3">
        <Link to={"/tools/add"} className="btn btn-dark">
          Refresh
        </Link>
        <Link to={"/tools/items"} className="btn btn-success">
          Ideas
        </Link>
      </div>
      <form>
        <div className=" w-75 m-auto bg-info p-4 rounded-5">
          <h1 className="text-center">ADD Ideas</h1>

          <div className=" d-flex flex-column">
            <div className="w-100 d-flex my-3">
              <label htmlFor="title" className="fw-bold fs-4 w-25 text-center">
                Title
              </label>
              <input
                type="text"
                placeholder="Title"
                id="title"
                className=" w-100  border-info mx-2 border-2 bg-body-tertiary p-1 px-2 rounded border-opacity-50 fs-3 fw-bold shadow"
                onChange={(e) => {
                  document.getElementById("titleHelp").innerText = "";
                  document.getElementById("topicHelp").innerText = "";
                  setTitle(e.target.value);
                }}
                value={title}
              />
            </div>
            <div
              className=" text-danger text-center fw-bold"
              id="titleHelp"
            ></div>
          </div>

          <div className=" d-flex flex-column">
            <div className=" w-100 d-flex my-3">
              <label htmlFor="topic" className="fw-bold fs-4 w-25 text-center">
                Topic
              </label>
              <input
                type="text"
                placeholder="Topic"
                id="topic"
                className=" w-100 border-info mx-2 border-2 bg-body-tertiary p-1 px-2 rounded border-opacity-50 fs-2 shadow "
                onChange={(e) => {
                  document.getElementById("titleHelp").innerText = "";
                  document.getElementById("topicHelp").innerText = "";
                  setTopic(e.target.value);
                }}
                value={topic}
              />
            </div>
            <div
              className=" text-danger text-center fw-bold"
              id="topicHelp"
            ></div>
          </div>

          <div className=" w-100 d-flex my-5">
            <label htmlFor="topic" className="fw-bold fs-6 w-25 text-center">
              Feedback
            </label>
            <textarea
              type="text"
              placeholder="Feedback"
              id="topic"
              rows={3}
              className=" w-100 border-info mx-2 border-2 bg-body-tertiary p-1 px-2 rounded border-opacity-50 fw-bold shadow"
              onChange={(e) => {
                document.getElementById("titleHelp").innerText = "";
                document.getElementById("topicHelp").innerText = "";
                setDescription(e.target.value);
              }}
              value={description}
            ></textarea>
          </div>

          <div className=" w-100 d-flex my-5 justify-content-center gap-5">
            <Link
              className="btn btn-primary px-5 fw-bold"
              onClick={(e) => addHandler(e)}
            >
              ADD
            </Link>
            <Link
              className="btn btn-danger px-3 fw-bold"
              onClick={(e) => {
                setTitle("");
                setTopic("");
                setDescription("");
              }}
            >
              Reset
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add;
