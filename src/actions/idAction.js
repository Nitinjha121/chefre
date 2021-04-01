import axios from "axios";
import { dataById } from "../api";

const idAction = (id) => async (dispatch) => {
  const byId = await axios.get(dataById(id));

  dispatch({
    type: "DETAILS",
    payload: {
      data: byId.data,
    },
  });
};

export default idAction;
