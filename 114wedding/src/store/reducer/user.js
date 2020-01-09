export const UPDATE_GENDER = 'UPDATE_GENDER'

let initState = {
    userinfo: {
        id: '',
        phone: '',
        gender: '男',
        weddingdate: '2020-12-31',
        birthdate: '1998-1-2',
        nikename: '用户2234667'
    },
    myshop: {},
    myorder: {}
}

const reducer = function (state = initState, { type, payload }) {
    switch (type) {
        case UPDATE_GENDER:
            return {
                ...state,//state 除了userinfo的其他数据
                userinfo: {
                    ...state.userinfo,
                    gender: payload
                }//覆盖修改
            }
        default:
            return state;
    }
}

export default reducer;