const express = require("express");
let { formatdata } = require("../utils/formatdata");
const Router = express.Router();
let { mongo } = require("../db");

//登录
Router.post('/', async (req, res) => {
    let { username, password } = req.body;
    let result = await mongo.find('admins', { username, password });
    if (result.length) {
        res.send(formatdata({ data: result }));
    } else {
        res.send(formatdata({ code: 0 }));
    }
});

//查询
Router.get('/', async (req, res) => {
    let result = await mongo.find('admins');
    if (result) {
        res.send(formatdata({ data: result }))
    } else {
        res.send(formatdata({ code: 0 }))
    }
});



module.exports = Router;
