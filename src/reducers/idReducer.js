const initialState = {
  data: {},
};

const idReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DETAILS":
      return {
        ...state,
        data: action.payload.data,
      };
    default:
      return { ...state };
  }
};

export default idReducer;
