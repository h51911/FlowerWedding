/**
 *  Redux-saga
 * 利用生成器函数实现业务逻辑
 * redux-saga在执行生成器函数时自动帮我们执行next()
 */

import { call, apply, put, takeEvery, takeLatest } from "redux-saga/effects";
import { My } from "../../api";
import { sever } from "../../api";
import { message } from "antd";

// function* getStock({ payload }) {

//   // My.get(`/goods/${payload.goods_id}/stock`)
//   let { data } = yield call(My.get, `/goods/${payload.goods_id}/stock`)

//   // 商品数量不允许超过库存数量
//   if (payload.goods_qty > data.stock) {
//     payload.goods_qty = data.stock;
//     message.error('库存不足');
//   }

//   console.log('getStock', payload.goods_qty)
//   yield put({
//     type: 'CHANGE_QTY',
//     payload
//   })

// }

function* up_info({ payload }) {
  //   // My.get(`/goods/${payload.goods_id}/stock`)
  let { data } = yield call(sever.post, `/users/updateuser`, payload)
  // console.log(data);
  yield put({
    type: 'UP_INFO',
    payload
  })
}

function* rootSaga() {
  console.log("rootSaga");
  // 监听用户指令
  // yield takeEvery("CHANGE_QTY_ASYNC", getStock)
  // yield takeLatest("CHANGE_QTY_ASYNC", getStock); //防抖
  yield takeLatest("UP_INFO_ASYNC", up_info); //防抖
}

export default rootSaga;
