import { getPath, setShopName } from "../reducer/common";

export function get_Path(path) {
  return {
    type: getPath,
    payload: path
  };
}

export function set_ShopName(name) {
  return {
    type: setShopName,
    payload: name
  };
}

export default {
  get_Path,
  set_ShopName
};
