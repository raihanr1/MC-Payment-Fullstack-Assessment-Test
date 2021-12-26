import {
  GET_USER_INFORMATION_TRANSACTION,
  TOPUP_TRANSACTION,
  TRANSFER_TRANSACTION,
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

export const topUpTransaction = (data) => {
  return async (dispatch) => {
    dispatch(updateState(LOADING_SERVER, true));
    try {
      let response = await axios({
        method: "PATCH",
        url: "/transactions/topup",
        data,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(updateState(TOPUP_TRANSACTION, response.data));
      dispatch(updateState(LOADING_SERVER, false));
    } catch (error) {
      dispatch(updateState(LOADING_SERVER, false));
      dispatch(updateState(ERROR_SERVER, error));
      dispatch(updateState(ERROR_SERVER, null));
    }
  };
};
// user_id, amount
export const transferTransaction = (data) => {
  return async (dispatch) => {
    dispatch(updateState(LOADING_SERVER, true));
    try {
      let response = await axios({
        method: "PATCH",
        url: "/transactions/transfer",
        data,
        headers: {
          access_token: localStorage.getItem("access_token"),
        },
      });
      dispatch(updateState(TRANSFER_TRANSACTION, response.data));
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
