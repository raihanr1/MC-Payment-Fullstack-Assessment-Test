import {
  GET_USER_INFORMATION_TRANSACTION,
  LOADING_SERVER,
  TRANSFER_TRANSACTION,
  TOPUP_TRANSACTION,
  ERROR_SERVER,
  USER_LOGOUT,
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
    case TOPUP_TRANSACTION:
      let topUp = state.usersInformation;
      topUp.balance[0].amount = action.payload.amount;
      topUp.transaction.push(action.payload.transaction);
      topUp.transaction.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      return {
        ...state,
        usersInformation: topUp,
      };
    case TRANSFER_TRANSACTION:
      let transfer = state.usersInformation;
      transfer.balance[0].amount = action.payload.amount;
      transfer.transaction.push(action.payload.transaction);
      transfer.transaction.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
      });
      return {
        ...state,
        usersInformation: transfer,
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
    case USER_LOGOUT:
      return {
        usersInformation: {},
        loading: false,
        error: null,
      };
    default:
      return state;
  }
}
