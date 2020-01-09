/*
* @baseurl: /shops

*/
const express = require('express');
let { formatdata } = require('../utils/formatdata');
const Router = express.Router();
let { mongo } = require('../db');


Router.get('/', async (req, res) => {
    let result = await mongo.find('shopslist', req.query);
    if (result.length) {
        //成功
        res.send(formatdata({ data: result }));
    } else {
        //失败
        res.send(formatdata({ code: 0 }));
    }
});

module.exports = Router;