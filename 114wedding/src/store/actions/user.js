//状态码
import { UPDATE_GENDER } from '../reducer/user';//更新性别
import { UP_NIKENAME } from '../reducer/user';//修改昵称
import { LOGIN } from '../reducer/user';//修改昵称
import { UP_WEDDINGDATE } from '../reducer/user';//修改昵称
import { MYORDERS } from '../reducer/user';//修改昵称

export function up_gen(gender) {
    return {
        type: UPDATE_GENDER,
        payload: {
            gender
        }
    }
}

export function up_n(nikename) {
    return {
        type: UP_NIKENAME,
        payload: {
            nikename
        }
    }
}

export function up_d(weddingdate) {
    return {
        type: UP_WEDDINGDATE,
        payload: {
            weddingdate
        }
    }
}

export function myorder(myorders, myshops) {
    return {
        type: MYORDERS,
        payload: {
            myorders, myshops
        }
    }
}

export function login(userInfo) {
    return {
        type: LOGIN,
        payload: userInfo
    }
}

export default {
    up_gen, up_n, up_d, login
}