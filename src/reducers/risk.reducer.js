/* eslint-disable import/no-anonymous-default-export */
import { RISKCHECKBOX_SUCCESS, RISKCHECKBOX_CLEAR,RISKCHECKBOX_FETCHING,RISKCHECKBOX_FAILED} from "../Constants";

const initialState = {
  result: null,
  isFetching: false,
  isError: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RISKCHECKBOX_FETCHING:
      return { ...state, isFetching: true, isError: false, result: null };
    case RISKCHECKBOX_SUCCESS:
      return { ...state, result: payload, isFetching: false, isError: false };
    case RISKCHECKBOX_FAILED:
      return { ...state, result: null, isFetching: false, isError: true };
    case RISKCHECKBOX_CLEAR:
      return { ...initialState };
    default:
      return state;
  }
};
