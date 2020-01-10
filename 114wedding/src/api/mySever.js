import axios from "axios";
import qs from 'qs'

const Sever = axios.create({
  baseURL: "http://localhost:1912/"
});

export const get = async (url, params, config = {}) => {
  let { data } = await Sever.get(url, {
    ...config,
    params
  });
  return data;
};
export const post = async (path, data = {}, config = {}) => {
  return await Sever.post(path, qs.stringify(data), config);
};

export default {
  get,
  post
};
