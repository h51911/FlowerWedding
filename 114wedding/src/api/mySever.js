import axios from "axios";

const Sever = axios.create({
  baseURL: "http://10.3.140.72:1912/"
});

export const get = async (url, params, config = {}) => {
  let { data } = await Sever.get(url, {
    ...config,
    params
  });
  return data;
};
export const post = async (path, data = {}, config = {}) => {
  return await Sever.post(path, data, config);
};

export default {
  get,
  post
};
