const express = require("express");
const Router = express.Router();

//为了获取req.body里面的数据
Router.use(express.urlencoded({}));
Router.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "PUT,PATCH,POST,GET,DELETE,OPTIONS"
  );
  // 跨域请求CORS中的预请求
  if (req.method == "OPTIONS") {
    //特殊请求：发送了请求头的那些请求
    res.sendStatus(200); /*让options请求快速返回*/
  } else {
    next();
  }
});

//引入子路由模块
const usersRouter = require("./users");
const loginRouter = require("./login");
const shopsRouter = require("./shops");
const adminsRouter = require("./admins");
const collectionRouter = require("./collection");
let { verify } = require("../utils/token");
let { formatdata } = require("../utils/formatdata");

//调用子路由
Router.use("/users", usersRouter);
Router.use("/shops", shopsRouter);
Router.use("/login", loginRouter);
Router.use("/admins", adminsRouter);
Router.use("/collection", collectionRouter);


//token检验
Router.post("/verify", (req, res) => {
  let { token } = req.body;
  let result = verify(token);
  if (result) {
    //可以直接登陆
    res.send(formatdata());
  } else {
    res.send(formatdata({ code: 0 }));
  }
});

module.exports = Router;
