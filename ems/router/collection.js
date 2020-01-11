/**
 * baseurl:/collection/
 * /shops  查询所有预约  get
 * /shops?phone=18818428921 查询用户18818428921预约 get
 * /orders  查询所有用户关注商铺  get
 * /shops?phone=18818428921 查询用户18818428921关注商铺  get   
 */
const express = require("express");
let ObjectID = require('mongodb').ObjectID;
let { formatdata } = require("../utils/formatdata");
const Router = express.Router();
let { mongo } = require("../db");


Router.get('/orders', async (req, res) => {
    let { phone } = req.query
    let result;
    phone ? result = await mongo.find('orders', { phone }) : result = await mongo.find('orders')
    if (result.length) {
        //成功
        res.send(formatdata({ data: result }));
    } else {
        //失败
        res.send(formatdata({ code: 0 }));
    }
});


Router.get('/shops', async (req, res) => {
    let { phone } = req.query
    let result;
    phone ? result = await mongo.find('shops', { phone }) : result = await mongo.find('shops')
    if (result.length) {
        //成功
        res.send(formatdata({ data: result }));
    } else {
        //失败
        res.send(formatdata({ code: 0 }));
    }
});

Router.route('/shop').post(async (req, res) => {
    let {
        phone, w_id
    } = req.body;

    let c_res = await mongo.find('shops', { phone, w_id });

    let data = {};
    if (c_res.length) {//取消收藏
        let res_cancle = await mongo.remove('shops', { w_id });
        if (res_cancle.result.n !== 0) {
            res.send(formatdata({ data: { mes: "已取消收藏" }, code: 0 }))
        }
    } else {
        let u_res = await mongo.find('user', { phone });
        let s_res = await mongo.find('shopslist', { _id: ObjectID(w_id) });
        if (u_res.length && s_res.length) {
            data.phone = phone;
            data.w_id = w_id;//shop_id
            data.w_name = s_res[0].w_name;//shop_name
            data.w_img = s_res[0].w_img;//shap_img
            data.u_id = u_res[0]._id;//user_id
            let res_shop = await mongo.create('shops', [data]);
            res.send(formatdata({ data: { mes: "收藏成功" } }))
        }
    }
});

Router.route('/order').post(async (req, res) => {
    let {
        phone, w_id
    } = req.body;

    let c_res = await mongo.find('orders', { phone, w_id });
    let data = {};
    if (c_res.length) {
        res.send(formatdata({ data: { mes: "已预约过" }, code: 0 }))
    } else {
        let u_res = await mongo.find('user', { phone });
        let s_res = await mongo.find('shopslist', { _id: ObjectID(w_id) });
        if (u_res.length && s_res.length) {
            data.w_id = w_id;//shop_id
            data.w_name = s_res[0].w_name;//shop_name
            data.w_img = s_res[0].w_img;//shap_img
            data.time = Date.now();//ordertime
            data.phone = phone;//user_phone
            data.u_id = u_res[0]._id;//user_id
            data.state = false;//订单状态
            let res_shop = await mongo.create('orders', [data]);
            res.send(formatdata({ data: { mes: "预约成功" } }))
        }
    }
});

module.exports = Router

