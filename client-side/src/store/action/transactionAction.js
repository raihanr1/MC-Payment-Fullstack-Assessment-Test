import {
  GET_USER_INFORMATION_TRANSACTION,
  LOADING_SERVER,
  ERROR_SERVER,
} from "../action-type/transactionType";
import axios from "../../config/serverConfig";
export const getUserInformation = () => {
  return async (dispatch) => {
    dispatch(updateState(LOADING_SERVER, true));
    try {
      let response = await axios({
        method: "GET",
        url: "/transactions",
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(updateState(GET_USER_INFORMATION_TRANSACTION, response.data));
      dispatch(updateState(LOADING_SERVER, false));
    } catch (error) {
      dispatch(updateState(LOADING_SERVER, false));
      dispatch(updateState(ERROR_SERVER, error));
      dispatch(updateState(ERROR_SERVER, null));
    }
  };
};

const updateState = (type, payload) => {
  return {
    type,
    payload,
  };
};
