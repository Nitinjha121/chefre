const initialState = {
  search: [],
  isLoading: false,
  err: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        search: action.payload.search,
        isLoading: false,
      };
    case "LOADING_DETAIL":
      return {
        ...state,
        isLoading: true,
      };
    case "ERROR":
      return {
        ...state,
        err: action.payload.err,
      };
    default:
      return { ...state };
  }
};

export default searchReducer;
