/*
 * @Author: your name
 * @Date: 2019-11-29 14:17:17
 * @LastEditTime: 2019-12-02 14:24:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \1909_nodejs\04mysql\mogujie\router\users.js
 * @baseurl:/users
 */

/*
   * 用户管理
       * 查询是否存在
       * 注册
       * 登陆
       * 修改密码
       * 查询所有用户
*/
const express = require('express');
let { formatdata } = require('../utils/formatdata');
const Router = express.Router();
let { mongo } = require('../db');


//查询所有用户
Router.get('/', async (req, res) => {
    let result = await mongo.find('user', req.query);
    if (result.length) {
        //成功
        res.send(formatdata({ data: result }));
    } else {
        //失败
        res.send(formatdata({ code: 0 }));
    }
});

Router.get('/', async (req, res) => {
    let { phone } = req.query
    let result = await mongo.find('user', { phone });;
    if (result.length) {
        //成功
        res.send(formatdata({ data: result }));
    } else {
        //失败
        res.send(formatdata({ code: 0 }));
    }
});

//注册 
Router.post('/reg', async (req, res) => {
    let result = await mongo.create('user', [req.body]);
    if (result.insertedCount) {
        //插入成功
        res.send(formatdata());
    } else {
        //插入失败
        res.send(formatdata({ code: 0 }));
    }
});


//删除
Router.post('/delete', async (req, res) => {
    let { id } = req.body

    id.forEach(item => {
        let result = await mongo.remove('user', { _id: item._id });
        if (result) {
            res.send(formatdata({ data: result }))
        } else {
            res.send(formatdata({ code: 0 }))
        }
    })


});

//修改用户相关数据
Router.post('/updateuser', async (req, res) => {
    let { phone, nikename, weddingdate, gender } = req.body
    let result = await mongo.update('user', { phone }, { $set: { nikename, weddingdate, gender } })
    if (result.modifiedCount) {
        res.send(formatdata())
    } else {
        res.send(formatdata({ code: 0 }))
    }
});



module.exports = Router;