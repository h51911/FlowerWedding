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

//通过id查询商家
Router.get("/getShop", async (req, res) => {
  let { id } = req.query;
  let result = await mongo.find("shopslist", {
    _id: require("mongodb").ObjectID(id)
  });
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
  console.log(666)
  let index = (page - 1) * num;
  num = parseInt(num);
  let query = null;
  switch (true) {
    case kind === "不限" && area === "全城":
      query = {};
      break;
    case kind === "不限":
      query = { w_area: area };
      break;
    case area === "全城":
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

//判断商家是否已收藏
Router.get("/getFollow", async (req, res) => {
  let result = await mongo.find("shops", req.query);
  if (result.length) {
    //成功
    res.send(formatdata({ result: 1 }));
  } else {
    //失败
    res.send(formatdata({ code: 0 }));
  }
});

Router.use('/book', async (req, res) => {
  let result = await mongo.find("shops", req.query);
  if (result.length) {
    //成功
    res.send(formatdata({ result: 1 }));
  } else {
    //失败
    res.send(formatdata({ code: 0 }));
  }
})

module.exports = Router;
