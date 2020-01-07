import { getPath } from "../reducer/common";

export function get_Path(path) {
  return {
    type: getPath,
    payload: path
  };
}

export default {
  get_Path
};
