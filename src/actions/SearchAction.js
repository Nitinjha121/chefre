import axios from "axios";
import { fetchData } from "../api";

const SearchAction = (query) => async (dispatch) => {
  try {
    dispatch({
      type: "LOADING_DETAIL",
    });

    const searchData = await axios.get(fetchData(query));

    dispatch({
      type: "SEARCH",
      payload: {
        search: searchData.data.results,
      },
    });
  } catch (err) {
    dispatch({
      type: "ERROR",
      payload: {
        err: err,
      },
    });
  }
};

export default SearchAction;
