import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Update = () => {
  
  const navigate = useNavigate()
  const authentication = ()=>{
    const token = localStorage.getItem('token');
    if(!token)
    {
      navigate('/login')
    }
  }
  const [item, setItem] = useState({});
  const [title,setTitle] = useState("")
  const [topic,setTopic] = useState("")
  const [description,setDescription] = useState("")

  const id = window.location.pathname.split("/")[3];

  const getData = async () => {
    const res = await axios.get(`http://localhost:5000/item/get/${id}`);
    setItem(res.data);
    setTitle(res.data.title)
    setTopic(res.data.topic)
    setDescription(res.data.description)
  };


  const updateHandler = async (e) => {

    await axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/item/update/${item._id}`,{title,topic, description})
        navigate("/tools/items")
  }

  useEffect(() => {
    authentication();
    getData();
  },[]);
  return (
    <div className="container">
      <div className="d-flex justify-content-evenly p-3">
        <Link to={"/tools/update"} className="btn btn-dark">
          Refresh
        </Link>
        <Link to={"/tools/items"} className="btn btn-primary">
          Back
        </Link>
      </div>
      <form>
        <div className=" w-75 m-auto bg-primary bg-opacity-25 p-4 rounded-5">
          <h1 className="text-center">UPDATE</h1>

          <div className="w-100 d-flex my-3">
            <label htmlFor="title" className="fw-bold fs-4 w-25 text-center">
              Title
            </label>
            <input
              type="text"
              placeholder="Title"
              id="title"
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value);
              }}
              className=" w-100  border-info mx-2 border-2 bg-body-tertiary p-1 px-2 rounded border-opacity-50 fs-3 fw-bold shadow"
            />
          </div>

          <div className=" w-100 d-flex my-3">
            <label htmlFor="topic" className="fw-bold fs-4 w-25 text-center">
              Topic
            </label>
            <input
              type="text"
              placeholder="Topic"
              id="topic"
              value={topic}
              onChange={(e)=>{
                setTopic(e.target.value);
              }}
              className="w-100 border-info mx-2 border-2 bg-body-tertiary p-1 px-2 rounded border-opacity-50 fs-2 shadow"
            />
          </div>

          <div className=" w-100 d-flex my-5">
            <label htmlFor="topic" className="fw-bold fs-6 w-25 text-center">
              Feedabck
            </label>
            <textarea
              type="text"
              placeholder="Topic"
              id="topic"
              value={description}
              onChange={(e)=>{
                setDescription(e.target.value);
              }}
              rows={3}
              className=" w-100 border-info mx-2 border-2 bg-body-tertiary p-1 px-2 rounded border-opacity-50 fw-bold shadow"
            ></textarea>
          </div>

          <div className=" w-100 d-flex my-5 justify-content-center gap-5">
            <Link type="submit" onClick={(e)=>updateHandler(e)} className="btn btn-primary px-5">
              UPDATE
            </Link>
            <Link type="button" className="btn btn-danger px-3">
              Reset
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Update;
