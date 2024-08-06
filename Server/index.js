require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const DB = require("./models/DB");
const Register = require("./controller/Register");
const Login = require("./controller/Login");
const Get = require("./controller/Get");
const Add = require("./controller/Add");
const GetItems = require("./controller/GetItems");
const ItemDelete = require("./controller/ItemDelete");
const GetItem = require("./controller/GetItem");
const ItemUpdate = require("./controller/ItemUpdate");
const {CodeItem,CodeDelete,CodeUpdate,CodeItemWithQuery, CodeItemLength, GetCodeItem} = require("./controller/CodingPage");

const app = express();
const Port = process.env.PORT || 5000;

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.post("/register", Register);
app.get("/get", Get);
app.get("/login", Login);
app.post("/items/add", Add);
app.get("/items/get", GetItems);
app.delete("/items/delete/:id", ItemDelete);
app.get("/item/get/:id", GetItem);
app.post("/item/update/:id", ItemUpdate);
app.get("/getcodeitem",GetCodeItem);
app.post("/codeitem",CodeItem);
app.post("/codeitem/:index",CodeItemWithQuery);
app.post("/codedelete/:index",CodeDelete);
app.get("/codeUpdate/:index",CodeUpdate);
app.get("/codeitemlength",CodeItemLength);

app.listen(Port, () =>
  console.log(`Server Running At PORT : http://localhost:${Port}/`)
);
