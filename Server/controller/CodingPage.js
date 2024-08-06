const userModel = require("../models/User_model");
const Buffer = require("buffer/").Buffer;

const GetCodeItem = async (req, res) => {
  try {
    const token = await req.query.token;
    const tokenDecodablePart = await token.split(".")[1];
    const decoded = Buffer.from(tokenDecodablePart, "base64").toString();
    const email = await JSON.parse(decoded).email;

    const user = await userModel.find({ email: email });
    const newuser = await user[0].related;
    await res.status(200).json(newuser);
  } catch (err) {
    res.status(400).send(err);
  }
};

const CodeItem = async (req, res) => {
  try {
    const token = await req.body.token;
    const language = await req.body.language;
    const code = await req.body.code;

    const tokenDecodablePart = await token.split(".")[1];
    const decoded = Buffer.from(tokenDecodablePart, "base64").toString();
    const email = await JSON.parse(decoded).email;

    const user = await userModel.find({ email: email });
    const index = await user[0].related.length;
    const newuser = await user[0].related;
    newuser[index] = { language: language, code: code };
    await userModel.findOneAndUpdate({ email: email }, { related: newuser });
    await res.sendStatus(200);
  } catch (err) {
    res.status(400).send(err);
  }
};

const CodeItemWithQuery = async (req, res) => {
  try {
    const token = await req.body.token;
    const language = await req.body.language;
    const code = await req.body.code;
    const index = await req.params.index;

    const tokenDecodablePart = await token.split(".")[1];
    const decoded = Buffer.from(tokenDecodablePart, "base64").toString();
    const email = await JSON.parse(decoded).email;

    const user = await userModel.find({ email: email });
    const newuser = await user[0].related;
    newuser[index] = { language: language, code: code };
    await userModel.findOneAndUpdate({ email }, { related: newuser });
    await res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
};

const CodeDelete = async (req, res) => {
  try {
    const token = await req.body.token;
    const index = await req.params.index;

    const tokenDecodablePart = await token.split(".")[1];
    const decoded = Buffer.from(tokenDecodablePart, "base64").toString();
    const email = await JSON.parse(decoded).email;

    const user = await userModel.find({ email: email });
    const newusr = await user[0].related;
    const newuser = newusr.filter((item) => newusr[index] !== item);
    const updated = await userModel.findOneAndUpdate(
      { email },
      { related: newuser }
    );
    await res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
};

const CodeUpdate = async (req, res) => {
  try {
    const token = await req.query.token;
    const index = await req.params.index;

    const tokenDecodablePart = await token.split(".")[1];
    const decoded = Buffer.from(tokenDecodablePart, "base64").toString();
    const email = await JSON.parse(decoded).email;

    const user = await userModel.find({ email: email });
    const newuser = await user[0].related;
    await res.status(200).json(newuser[index]);
  } catch (err) {
    res.status(400).send(err);
  }
};

const CodeItemLength = async (req, res) => {
  try {
    const token = await req.query.token;

    const tokenDecodablePart = await token.split(".")[1];
    const decoded = Buffer.from(tokenDecodablePart, "base64").toString();
    const email = await JSON.parse(decoded).email;

    const user = await userModel.find({ email: email });
    const newuser = await user[0].related;

    await res.status(200).json(newuser.length-1);
  } catch (err) {
    res.status(400).send(err);
  }
};

module.exports = {
  GetCodeItem,
  CodeItem,
  CodeDelete,
  CodeUpdate,
  CodeItemWithQuery,
  CodeItemLength,
};
