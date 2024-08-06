import React from "react";
import { Link } from "react-router-dom";

const Items = (value) => {

  return (
    <div className="bg-success bg-opacity-50 p-3 rounded shadow">
      <p className=" text-warning shadow" style={{fontSize: "10px"}}>{value.UserName}</p>
      <h3 className=" text-primary">{value.title}</h3>
      <div>
        <h5>{value.topic}</h5>
      </div>
      <div>
        <p>{value.description}</p>
      </div>
      <div className=" d-flex justify-content-around w-100 gap-3">
        <Link
          className="btn btn-danger fw-bold"
          onClick={() => value.deleteItem(value.id)}
        >
          DELETE
        </Link>
        <Link
          className="btn btn-info fw-bold"
          onClick={(e)=>{e.preventDefault();
            value.updateItem(value.id)}}
        >
          UPDATE
        </Link>
      </div>
    </div>
  );
};

export default Items;
