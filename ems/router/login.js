const express = require('express');
let { formatdata } = require('../utils/formatdata');
const Router = express.Router();
let { sendCode, sms } = require("../utils/sms");//短信
let { create } = require('../utils/token');
let { mongo } = require('../db');


//baseurl:login
//发送验证码 
Router.route('/sendcode').post(async (req, res) => {
    let {
        phone
    } = req.body;
    let result = await sms(phone, sendCode);
    if (result.Code === "OK") {
        res.send(formatdata({ message: "发送成功" }));
    } else {
        res.send(formatdata({ code: 0 }));
    }
});

// 验证手机验证码 
Router.route('/verifycode').post(async (req, res) => {
    let {
        phone,
        code
    } = req.body;
    let result = code === sendCode;
    if (result) {
        let token = create(phone);
        //查询手机号
        let res_sear = await mongo.find('user', { phone });
        // reg(res_sear, phone);
        if (!res_sear.length) {
            let data = [{
                phone,
                gender: "男",
                weddingdate: Date.now(),
                nikename: phone
            }]
            let res_inser = await mongo.create('user', data);
            res.send(formatdata({ authorization: token, data }))
        } else {
            res.send(formatdata({ authorization: token, data: res_sear }));
        }
    } else
        res.send(formatdata({ code: 0 }));
});


module.exports = Router;
