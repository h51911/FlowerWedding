/**
 *  Redux-saga
 * 利用生成器函数实现业务逻辑
 * redux-saga在执行生成器函数时自动帮我们执行next()
 */

import { call, apply, put, takeEvery, takeLatest } from "redux-saga/effects";
import { My } from "../../api";
import { sever } from "../../api";
import { message } from "antd";

function* up_info({ payload }) {
  let { data } = yield call(sever.post, `/users/updateuser`, payload);
  yield put({
    type: 'UP_INFO',
    payload
  });
}

function* rootSaga() {
  console.log("rootSaga");
  // 监听用户指令
  // yield takeLatest("CHANGE_QTY_ASYNC", getStock); //防抖
  yield takeLatest("UP_INFO_ASYNC", up_info); //防抖
}

export default rootSaga;
