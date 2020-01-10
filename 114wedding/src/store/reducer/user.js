//操作数据
export const UPDATE_GENDER = 'UPDATE_GENDER';
export const UP_NIKENAME = 'UP_NIKENAME';
export const UP_INFO = 'UP_INFO';

let uesrInfo = JSON.parse(localStorage.getItem('user'))
if (uesrInfo === null) {
    uesrInfo = {
        gender: "",
        weddingdate: 0,
        nikename: "",
        phone: ""
    }
}
let authorization = localStorage.getItem('Authorization');

let initState = {
    uesrInfo,//用户基本信息
    authorization,//token值
    myshop: {},//我的商家
    myorder: {}//我的预约
}

const reducer = function (state = initState, { type, payload }) {

    let { uesrInfo } = state

    switch (type) {
        case UPDATE_GENDER:
            uesrInfo.gender = payload.gender
            return {
                ...state,
                uesrInfo
            }
        case UP_NIKENAME:
            uesrInfo.nikename = payload.nikename
            return {
                ...state,
                uesrInfo
            }
        case UP_INFO:
            uesrInfo = payload;
            localStorage.setItem('user', JSON.stringify(uesrInfo));
            return {
                ...state,
                uesrInfo
            }


        default:
            return state;
    }
}

export default reducer;