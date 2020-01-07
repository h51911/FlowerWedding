export const getPath = "getPath";

let initState = {
  show: true,
  currentPath: ""
};

const reducer = function(state = initState, { type, payload }) {
  switch (type) {
    case "showFooter":
      return {
        ...state,
        show: payload
      };
    case getPath:
      return {
        ...state,
        currentPath: payload
      };
    default:
      return state;
  }
};

export default reducer;
