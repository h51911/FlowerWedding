import MyApi from "./myweb";
import MySever from "./mySever";
import Request from "./request";

export const My = MyApi;
export const sever = MySever;
export const req = Request;

export default {
  My: MyApi,
  sever: MySever,
  req: Request
};
