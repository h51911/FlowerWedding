//状态码
import { UPDATE_GENDER } from '../reducer/user';//更新性别
import { UP_NIKENAME } from '../reducer/user';//修改昵称

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

export default {
    up_gen, up_n
}