
import axios from 'axios';

const My = axios.create({
    baseURL: "http://192.168.137.1:1912/"
});

export const get = async (url, params, config = {}) => {
    let { data } = await My.get(url, {
        ...config,
        params
    })

    return data;
}

export default {
    get
}