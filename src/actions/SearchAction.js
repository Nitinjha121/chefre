import axios from "axios";
import { fetchData } from "../api";

const SearchAction = (query) => async (dispatch) => {
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
};

export default SearchAction;
