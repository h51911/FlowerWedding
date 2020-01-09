/*
* @baseurl: /shops

*/
const express = require("express");
let { formatdata } = require("../utils/formatdata");
const Router = express.Router();
let { mongo } = require("../db");

Router.get("/", async (req, res) => {
  let result = await mongo.find("shopslist", req.query);
  if (result.length) {
    //成功
    res.send(formatdata({ data: result }));
  } else {
    //失败
    res.send(formatdata({ code: 0 }));
  }
});

//列表页分类分页查询
Router.post("/getList", async (req, res) => {
  let { page, num, kind, area } = req.body;
  let index = (page - 1) * num;
  num = parseInt(num);
  let query = null;
  switch (true) {
    case kind === "all" && area === "all":
      query = {};
      break;
    case kind === "all":
      query = { w_area: area };
      break;
    case area === "all":
      query = { w_kind: { $in: kind } };
      break;
    default:
      query = { w_kind: { $in: kind }, w_area: area };
  }
  let result = await mongo.findnum("shopslist", query, index, num);

  if (result.length) {
    //成功
    res.send(formatdata({ data: result }));
  } else {
    //失败
    res.send(formatdata({ code: 0 }));
  }
});
module.exports = Router;
