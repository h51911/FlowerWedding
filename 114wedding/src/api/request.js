import axios from "axios";
import qs from "qs";

const Request = axios.create({
  baseURL: "http://localhost:1912"
});

export const get = async (url, params, config = {}) => {
  let { data } = await Request.get(url, {
    ...config,
    params
  });
  return data;
};
export const post = async (path, data, config = {}) => {
  console.log(data);
  return await Request.post(path, qs.stringify(data), config);
};

export default {
  get,
  post
};
