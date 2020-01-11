//操作数据
export const UPDATE_GENDER = 'UPDATE_GENDER';
export const UP_NIKENAME = 'UP_NIKENAME';
export const UP_INFO = 'UP_INFO';
export const UP_WEDDINGDATE = 'UP_WEDDINGDATE';
export const MYORDERS = 'MYORDERS';
export const LOGIN = 'LOGIN';

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
    myshops: [],//我的商家
    myorders: []//我的预约
}

const reducer = function (state = initState, { type, payload }) {

    let { uesrInfo, myorders, myshops } = state

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
        case UP_WEDDINGDATE:
            uesrInfo.weddingdate = payload.weddingdate
            return {
                ...state,
                uesrInfo
            }
        case MYORDERS:
            myorders = payload.myorders
            myshops = payload.myshops
            return {
                ...state,
                myorders, myshops
            }
        case LOGIN:
            return {
                ...state,
                uesrInfo: payload
            }

        default:
            return state;
    }
}

export default reducer;