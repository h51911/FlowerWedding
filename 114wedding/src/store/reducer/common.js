let initState = {
  show: true
};

const reducer = function(state = initState, { type, payload }) {
  switch (type) {
    case "showFooter":
      return {
        ...state,
        show: payload
      };
    default:
      return state;
  }
};

export default reducer;
