import axios from "axios";
import { dataById } from "../api";

const idAction = (id) => async (dispatch) => {
  const byId = await axios.get(dataById(id));
  console.log(byId);
  dispatch({
    type: "DETAILS",
    payload: {
      data: byId.data.results,
    },
  });
};

export default idAction;