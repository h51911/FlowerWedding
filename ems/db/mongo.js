const { MongoClient } = require("mongodb");
const { DBurl, DBname } = require("../config.json");

//第二个方法：connect()方法如果写了回调，client就是回调里面的第二个参数。如果不写回调，方法直接返回promise对象，client
async function connect() {
  let client = await MongoClient.connect(DBurl);
  let db = client.db(DBname);
  return { db, client };
}

/**
 * @description: 增/删/改/查
 * @param {string} 集合名字 colname
 * @param {array} 数组      data
 * @return: object
 */

async function create(colname, data) {
  //1.连接数据库
  let { db, client } = await connect();
  //2.找到集合
  let col = db.collection(colname); //无则自动创建
  //3.插入数据到集合
  let result = await col.insertMany(data);
  //4.关闭数据库
  client.close();
  return result;
}

async function remove(colname, query) {
  let { db, client } = await connect();
  let col = db.collection(colname);
  let result = await col.deleteMany(query);
  client.close();
  return result;
}

async function update(colname, query, newdata) {
  let { db, client } = await connect();
  let col = db.collection(colname);
  let result = await col.updateMany(query, newdata);
  client.close();
  return result;
}

async function find(colname, qurey) {
  try {
    let { db, client } = await connect();
    let col = db.collection(colname);
    let result = await col.find(qurey).toArray();
    client.close();
    return result;
  } catch {
    console.log("err:" + err);
  }
}

// 分页查询
async function findnum(colname, qurey, index, num) {
  try {
    let { db, client } = await connect();

    let col = db.collection(colname);

    let result = await col
      .find(qurey)
      .skip(index)
      .limit(num)
      .toArray();

    client.close();
    // console.log(result);
    return result;
  } catch (err) {}
}

module.exports = {
  create,
  remove,
  update,
  find,
  findnum
};
