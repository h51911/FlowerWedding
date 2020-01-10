export const getPath = "getPath";
export const setShopName = "setShopName";

let initState = {
  show: true,
  currentPath: "",
  shopName: ""
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
    case setShopName:
      return {
        ...state,
        shopName: payload
      };
    default:
      return state;
  }
};

export default reducer;
