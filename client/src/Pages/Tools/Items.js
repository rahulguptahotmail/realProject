import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import GetItems from "../../Utils/GetItems";

const Items = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);


  const authentication = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  };

 

  const getdata = async () => {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/items/get`);
    setData(res.data);
  };
  const deleteItem = async (item) => {
    await axios.delete(
      `${process.env.REACT_APP_SERVER_DOMAIN}/items/delete/${item}`
    );
  };

  const updateItem = async (item) => {
    navigate(`/tools/update/${item}`);
  };

  useEffect(() => {
    authentication();
    getdata();
  }, [deleteItem]);

  return (
    <div className="container">
      <div className="d-flex justify-content-evenly p-3">
        <Link to={"/tools/items"} className="btn btn-dark">
          Refresh
        </Link>
        <Link to={"/tools/add"} className="btn btn-primary">
          ADD
        </Link>
      </div>

      <div className="container bg-primary rounded bg-opacity-25">
        <div className=" d-flex justify-content-center justify-content-sm-start align-items-center w-auto text-center rounded flex-wrap gap-3 p-3">
          {data.length > 0 ? (
            data.map((value) => (
              <GetItems
                key={value._id}
                id={value._id}
                title={value.title}
                topic={value.topic}
                description={value.description}
                UserName={value.createdBy}
                deleteItem={deleteItem}
                updateItem={updateItem}
              />
            ))
          ) : (
            <h1 className=" text-center p-4 mx-3">No Data Found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Items;
