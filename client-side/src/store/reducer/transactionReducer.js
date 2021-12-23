import {
  GET_USER_INFORMATION_TRANSACTION,
  LOADING_SERVER,
  ERROR_SERVER,
} from "../action-type/transactionType";

let initialState = {
  usersInformation: {},
  loading: false,
  error: null,
};

export default function transactionReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER_INFORMATION_TRANSACTION:
      return {
        ...state,
        usersInformation: action.payload,
      };
    case LOADING_SERVER:
      return {
        ...state,
        loading: action.payload,
      };
    case ERROR_SERVER:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
